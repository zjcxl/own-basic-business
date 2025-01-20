import type { ResultModel } from '@own-basic-component/config'
import type { FileRecordVo, ServiceType, SignatureCommonForm, SignatureForm, SignatureModel } from '../entity'
import { PostRequestModel, RequestFileModel } from '@own-basic-component/request'
import { stringToBase64 } from '@own-basic-component/util'
import { apiBusinessFileRecord } from './index'

/**
 * 请求前缀
 */
const prefix = 'resource'

/**
 * 上传文件
 * @param file 上传的文件
 * @param method 上传方式 默认default
 */
export async function upload(
  file: File,
  method: string = 'default',
): Promise<ResultModel<FileRecordVo>> {
  return new RequestFileModel<FileRecordVo>(`${prefix}/upload?method=${method}`, file).request()
}

/**
 * 获取上传签名信息
 * @param fileName 文件名称
 * @param method 上传方式 默认default
 * @param form 签名表单
 */
export async function getSignature(
  fileName: string,
  method: string = 'default',
  form: SignatureCommonForm = {},
): Promise<ResultModel<SignatureModel>> {
  return new PostRequestModel<SignatureModel>(`${prefix}/common/signature?method=${method}&fileName=${fileName}`, form).request()
}

/**
 * 获取上传签名信息（根据业务判断）
 * @param fileName 文件名称
 * @param form 签名表单
 */
export async function getSignatureForBusiness(
  fileName: string,
  form?: SignatureForm,
): Promise<ResultModel<SignatureModel>> {
  return new PostRequestModel<SignatureModel>(`${prefix}/signature?fileName=${fileName}`, form || {}).request()
}

/**
 * 获取上传签名信息
 * @param fileName 文件名称
 * @param file 上传的文件
 * @param method 上传方式 默认default
 * @param onUploadProgress 上传进度
 * @param form 签名表单
 */
export async function uploadForSignature(
  fileName: string,
  file: File,
  method: string = 'default',
  onUploadProgress?: (event: ProgressEvent) => void,
  form?: SignatureCommonForm,
): Promise<ResultModel<FileRecordVo>> {
  // 获取签名信息
  const { data: model, ...response } = await getSignature(fileName, method, form)
  // 如果文件记录存在，直接返回
  if (model.record && model.record.id) {
    return Promise.resolve({
      ...response,
      data: model.record,
    })
  }
  // 如果文件id存在，获取文件后返回
  if (model.fileId)
    return apiBusinessFileRecord.get(model.fileId)
  return uploadBySignature(file, model, form?.md5, onUploadProgress)
}

/**
 * 获取上传签名信息（根据业务判断）
 * @param fileName 文件名称
 * @param file 上传的文件
 * @param form 签名表单
 * @param onUploadProgress 上传进度
 */
export async function uploadForSignatureForBusiness(
  fileName: string,
  file: File,
  form: SignatureForm,
  onUploadProgress?: (event: ProgressEvent) => void,
): Promise<ResultModel<FileRecordVo>> {
  const { data: model, ...response } = await getSignatureForBusiness(fileName, form)
  // 如果文件记录存在，直接返回
  if (model.record && model.record.id) {
    return Promise.resolve({
      ...response,
      data: model.record,
    })
  }
  // 如果文件id存在，获取文件后返回
  if (model.fileId)
    return apiBusinessFileRecord.get(model.fileId)
  return uploadBySignature(file, model, form.md5, onUploadProgress)
}

/**
 * 上传文件的三方方法
 */
const SERVICE_UPLOAD_MAP: Record<ServiceType, (file: File, model: SignatureModel, md5: string, onUploadProgress?: (event: ProgressEvent) => void) => Promise<void>> = {
  aliyun: async (file: File, model: SignatureModel, md5: string, onUploadProgress?: (event: ProgressEvent) => void) => new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('name', file.name)
    formData.append('policy', model.policy)
    formData.append('OSSAccessKeyId', model.accessId)
    formData.append('success_action_status', '200')
    formData.append('signature', model.signature)
    formData.append('key', model.dir)
    if (model.callback) {
      const callback = {
        callbackUrl: model.callback.url,
        // eslint-disable-next-line no-template-curly-in-string
        callbackBody: 'name=${x:name}&oldName=${x:oldName}&path=${x:path}&position=${x:position}&type=${x:type}&size=${x:size}&md5=${x:md5}',
        callbackBodyType: model.callback.type,
      }
      formData.append('callback', stringToBase64(JSON.stringify(callback)))
      // 获取文件的名称
      const name = model.dir.split('/').pop() || ''
      // 添加自定义参数
      const callbackVar = {
        'x:name': name,
        'x:oldName': file.name,
        'x:path': model.dir,
        'x:position': model.host,
        'x:type': file.type,
        'x:size': file.size,
        'x:md5': md5,
      }
      formData.append('callback-var', stringToBase64(JSON.stringify(callbackVar)))
    }
    formData.append('file', file)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', model.host)
    xhr.onload = () => {
      if (xhr.status === 200) {
        // 上传成功
        resolve()
      }
    }
    if (onUploadProgress) {
      xhr.upload.onprogress = (e) => {
        onUploadProgress(e)
      }
    }
    xhr.onerror = (e) => {
      reject(e)
    }
    xhr.send(formData)
  }),
  huawei: () => Promise.resolve(),
  minio: () => Promise.resolve(),
  qiniu: () => Promise.resolve(),
  tencent: () => Promise.resolve(),
}

/**
 * 根据签名信息和文件信息上传文件
 * @param file
 * @param model
 * @param md5 文件的md5值
 * @param onUploadProgress
 */
export async function uploadBySignature(
  file: File,
  model: SignatureModel,
  md5: string = '',
  onUploadProgress?: (event: ProgressEvent) => void,
): Promise<ResultModel<FileRecordVo>> {
  // 直传文件
  await SERVICE_UPLOAD_MAP[model.type](file, model, md5, onUploadProgress)
  // 获取文件的名称
  const name = model.dir.split('/').pop() || ''
  // 保存文件信息
  return apiBusinessFileRecord.add({
    name,
    oldName: file.name,
    path: model.dir,
    position: model.host,
    type: file.type,
    size: file.size,
    md5,
  })
}
