import { GetRequestModel, RequestFileModel } from '@own-basic-component/request'
import type { FileRecordVo, SignatureForm, SignatureModel } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'resource'

export default {

  /**
   * 上传文件
   * @param file 上传的文件
   * @param method 上传方式 默认default
   */
  upload: (
    file: File,
    method: string = 'default',
  ) => new RequestFileModel<FileRecordVo>(`${prefix}/upload?method=${method}`, file).request(),
  /**
   * 获取上传签名信息
   * @param fileName 文件名称
   * @param method 上传方式 默认default
   */
  getSignature: (
    fileName: string,
    method: string = 'default',
  ) => new GetRequestModel<SignatureModel>(`${prefix}/signature?method=${method}&fileName=${fileName}`).request(),
  /**
   * 获取上传签名信息（根据业务判断）
   * @param fileName 文件名称
   * @param form 签名表单
   */
  getSignatureForBusiness: (
    fileName: string,
    form: SignatureForm,
  ) => new GetRequestModel<SignatureModel>(`${prefix}/signature?fileName=${fileName}`, form).request(),

}
