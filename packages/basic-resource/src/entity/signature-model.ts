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
