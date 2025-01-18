import type { YesNoType } from '../../../base'
import type { FileRecordVo } from './file-record'

/**
 * 三方服务
 */
export type ServiceType = 'aliyun' | 'qiniu' | 'tencent' | 'minio' | 'huawei'

export interface SignatureModel {
  /**
   * 文件id
   */
  fileId: string
  /**
   * 文件记录
   */
  record: FileRecordVo
  /**
   * 访问ID
   */
  accessId: string
  /**
   * 策略
   */
  policy: string
  /**
   * 签名
   */
  signature: string
  /**
   * 文件名
   */
  dir: string
  /**
   * 上传地址
   */
  host: string
  /**
   * 超时时间
   */
  expire: string
  /**
   * 上传的三方类型
   */
  type: ServiceType
  /**
   * 是否存在
   */
  isExist: YesNoType
  /**
   * 上传回调
   */
  callback?: UploadCallbackModel
}

export interface UploadCallbackModel {
  /**
   * 上传回调地址
   */
  url: string
  /**
   * 上传回调参数
   */
  body: string
  /**
   * 上传回调参数类型
   */
  type: string
}

export interface SignatureCommonForm {
  /**
   * 是否随机名称
   */
  randomName?: boolean
  /**
   * 文件md5
   */
  md5?: string
  /**
   * 前文件夹名称
   */
  folder?: string
}

export interface SignatureForm extends SignatureCommonForm {
  /**
   * 模块名
   */
  module?: string
  /**
   * 标号
   */
  sign: string
}
