import type { BaseCreateVo } from '../../../base'

export interface LogOperationVo extends BaseCreateVo {
  /**
   * 操作编码
   */
  code: string
  /**
   * 响应信息
   */
  message: string
  /**
   * 用户id
   */
  userId: string
  /**
   * 用户名
   */
  userName: string
  /**
   * 状态 1=成功 2=失败
   */
  status: number
  /**
   * 方法签名（全限定名）
   */
  methodName: string
  /**
   * 客户端
   */
  client: string
  /**
   * ip
   */
  ip: string
  /**
   * 额外信息
   */
  extra: string
  /**
   * 模块名称
   */
  moduleName: string
  /**
   * 操作名称
   */
  operationName: string
  /**
   * 请求时间
   */
  requestTime: string
  /**
   * 请求参数
   */
  requestParams: string
  /**
   * 响应时间
   */
  responseTime: string
  /**
   * 响应参数
   */
  responseParams: string
  /**
   * 链路id
   */
  traceId: string
  /**
   * 等级
   */
  level: number
  /**
   * 请求头信息
   */
  headerParams: string
  /**
   * cookie信息
   */
  cookieParams: string
  /**
   * 请求地址
   */
  requestUrl: string
  /**
   * 请求方式
   */
  requestMethod: string
  /**
   * 处理时间（ms）
   */
  handleTime: number
}
