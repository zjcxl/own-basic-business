import type { AccountType, BaseVo, YesNoType } from '../../../base'

export interface SystemAccountVo extends BaseVo {
  /**
   * 账号
   */
  account: string
  /**
   * 类型
   */
  type: string
  /**
   * 用户id
   */
  fkUserId: string
  /**
   * 是否启用 1=启用 0=禁用
   */
  enable: YesNoType
  /**
   * 账号类型 1=普通用户 2=管理员
   */
  accountType: AccountType
}
