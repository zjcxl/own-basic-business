import { GetRequestModel, RequestFileModel } from '@own-basic-component/request'
import type { FileRecordVo, ServiceType, SignatureForm, SignatureModel } from '../entity'
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
function upload(file: File, method: string = 'default') {
  return new RequestFileModel<FileRecordVo>(`${prefix}/upload?method=${method}`, file).request()
}

/**
 * 获取上传签名信息
 * @param fileName 文件名称
 * @param method 上传方式 默认default
 */
function getSignature(fileName: string, method: string = 'default') {
  return new GetRequestModel<SignatureModel>(`${prefix}/signature?method=${method}&fileName=${fileName}`).request()
}

/**
 * 获取上传签名信息（根据业务判断）
 * @param fileName 文件名称
 * @param form 签名表单
 */
function getSignatureForBusiness(fileName: string, form: SignatureForm) {
  return new GetRequestModel<SignatureModel>(`${prefix}/signature?fileName=${fileName}`, form).request()
}

/**
 * 获取上传签名信息
 * @param fileName 文件名称
 * @param file 上传的文件
 * @param method 上传方式 默认default
 * @param onUploadProgress 上传进度
 */
async function uploadForSignature(fileName: string, file: File, method: string = 'default', onUploadProgress?: (event: ProgressEvent) => void) {
  // 获取签名信息
  const { data: model } = await getSignature(fileName, method)
  return uploadBySignature(file, model, onUploadProgress)
}

/**
 * 获取上传签名信息（根据业务判断）
 * @param fileName 文件名称
 * @param file 上传的文件
 * @param form 签名表单
 * @param onUploadProgress 上传进度
 */
async function uploadForSignatureForBusiness(fileName: string, file: File, form: SignatureForm, onUploadProgress?: (event: ProgressEvent) => void) {
  const { data: model } = await new GetRequestModel<SignatureModel>(`${prefix}/signature?fileName=${fileName}`, form).request()
  return uploadBySignature(file, model, onUploadProgress)
}

/**
 * 上传文件的三方方法
 */
const SERVICE_UPLOAD_MAP: Record<ServiceType, (file: File, model: SignatureModel, onUploadProgress?: (event: ProgressEvent) => void) => Promise<void>> = {
  aliyun: async (file: File, model: SignatureModel, onUploadProgress?: (event: ProgressEvent) => void) => new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('name', file.name)
    formData.append('policy', model.policy)
    formData.append('OSSAccessKeyId', model.accessId)
    formData.append('success_action_status', '200')
    formData.append('signature', model.signature)
    formData.append('key', model.dir)
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
 * @param onUploadProgress
 */
async function uploadBySignature(file: File, model: SignatureModel, onUploadProgress?: (event: ProgressEvent) => void) {
  // 直传文件
  await SERVICE_UPLOAD_MAP[model.type](file, model, onUploadProgress)
  // 保存文件信息
  return apiBusinessFileRecord.add({
    name: file.name,
    oldName: file.name,
    path: model.dir,
    position: model.host,
    type: file.type,
    size: file.size,
    md5: '',
  })
}

export default {
  upload,
  getSignature,
  getSignatureForBusiness,
  uploadForSignature,
  uploadForSignatureForBusiness,
}
