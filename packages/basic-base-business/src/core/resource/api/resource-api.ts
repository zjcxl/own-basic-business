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
 */
async function uploadForSignature(fileName: string, file: File, method: string = 'default') {
  // 获取签名信息
  const { data: model } = await getSignature(fileName, method)
  return uploadBySignature(file, model)
}

/**
 * 获取上传签名信息（根据业务判断）
 * @param fileName 文件名称
 * @param file 上传的文件
 * @param form 签名表单
 */
async function uploadForSignatureForBusiness(fileName: string, file: File, form: SignatureForm) {
  const { data: model } = await new GetRequestModel<SignatureModel>(`${prefix}/signature?fileName=${fileName}`, form).request()
  return uploadBySignature(file, model)
}

/**
 * 上传文件的三方方法
 */
const SERVICE_UPLOAD_MAP: Record<ServiceType, (file: File, model: SignatureModel) => Promise<void>> = {
  aliyun: async (file: File, model: SignatureModel) => new Promise(() => {
    const formData = new FormData()
    formData.append('key', model.dir)
    formData.append('OSSAccessKeyId', model.accessId)
    formData.append('policy', model.policy)
    formData.append('signature', model.signature)
    formData.append('file', file)
    formData.append('success_action_status', '200')
    const xhr = new XMLHttpRequest()
    xhr.open('POST', model.host)
    xhr.send(formData)
    xhr.onload = () => {
      if (xhr.status === 200) {
        // 上传成功
        return Promise.resolve()
      }
    }
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
 */
async function uploadBySignature(file: File, model: SignatureModel) {
  // 直传文件
  SERVICE_UPLOAD_MAP[model.type](file, model).then(() => {})
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
