import type { BaseVo, YesNoType } from '../../../base'

export interface SystemUserSecurityVo extends BaseVo {
  /**
   * 用户id
   */
  userId: string
  /**
   * 是否允许使用姓名登录 1=允许 0=不允许
   */
  allowLoginName: YesNoType
  /**
   * 是否允许使用手机号登录 1=允许 0=不允许
   */
  allowLoginPhone: YesNoType
  /**
   * 是否允许使用短信验证码登录 1=允许 0=不允许
   */
  allowLoginSms: YesNoType
  /**
   * 是否允许使用密码登录 1=允许 0=不允许
   */
  allowLoginPassword: YesNoType
  /**
   * 是否允许使用邮箱登录 1=允许 0=不允许
   */
  allowLoginEmail: YesNoType
  /**
   * 是否开启登录的ip验证 1=需要 0=不需要
   */
  allowLoginIp: YesNoType
  /**
   * 允许登录的ip，登录ip设置127.0.0.1为全网都能登录
   */
  loginIps: string
}
