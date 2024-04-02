import type { AccountType, BaseVo, YesNoType } from '../../../base'

export interface SystemUserVo extends BaseVo {
  /**
   * 是否禁用 1=禁用 0=可用
   */
  isDisable: YesNoType
  /**
   * 账号状态 1=正常 2=审核 3=冻结
   */
  state: number
  /**
   * 账号来源 0=未知 1=系统用户添加 2=个人注册
   */
  fromType: number
  /**
   * 客户端id 为空标识都可以登录（多个用,分隔）
   */
  clientId: string
  /**
   * 账号封禁结束时间
   */
  banEndTime: string
  /**
   * 账号冻结结束时间
   */
  freezeEndTime: string
  /**
   * 最后一次登录时间
   */
  lastLogin: string
  /**
   * 用户类型 1=普通用户 2=管理员
   */
  type: AccountType

}
