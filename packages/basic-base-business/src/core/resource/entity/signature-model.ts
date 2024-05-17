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
