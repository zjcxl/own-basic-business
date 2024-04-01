/**
 * 三方服务
 */
export type ServiceType = 'aliyun' | 'qiniu' | 'tencent' | 'minio' | 'huawei'

export interface SignatureModel {
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

export interface SignatureForm {
  /**
   * 模块名
   */
  module: string
  /**
   * 标号
   */
  sign: string
}
