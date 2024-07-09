import type { BaseCreateVo } from '../../../base'
import type { OperationHeaderInfo } from '../../../base/utils/operation-header-info'

export interface LogLoginVo extends BaseCreateVo {
  /**
   * 登录账号
   */
  loginAccount: string
  /**
   * 登录类型
   */
  loginType: string
  /**
   * 登录编码
   */
  loginCode: string
  /**
   * 用户id
   */
  userId: string
  /**
   * 用户名
   */
  userName: string
  /**
   * ip地址
   */
  ip: string
  /**
   * 客户端
   */
  client: string
  /**
   * token
   */
  token: string
  /**
   * 操作内容
   */
  extra: string
  /**
   * 登录状态 1=成功 2=失败
   */
  status: number
  /**
   * 链路id
   */
  traceId: string
  /**
   * 请求头信息
   */
  headerParams: string
  /**
   * 请求头信息
   */
  headerObject: OperationHeaderInfo
}
