import type { AccountType, BaseCreateVo, BaseQuery, GenderType } from '../../../base'

export interface SystemUserInfoVo extends BaseCreateVo {
  /**
   * 用户id
   */
  userId: string
  /**
   * 名称
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 性别 1=男 2=女 0=保密
   */
  gender: GenderType
  /**
   * 头像
   */
  avatar: string
  /**
   * 介绍
   */
  introduction: string
  /**
   * 用户类型 1=普通用户 2=管理员
   */
  type: AccountType

}

export interface SystemUserInfoQuery extends BaseQuery {
  /**
   * 用户id
   */
  userId: string
  /**
   * 名称
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 性别 1=男 2=女 0=保密
   */
  gender: GenderType
  /**
   * 介绍
   */
  introduction: string
  /**
   * 用户类型 1=普通用户 2=管理员
   */
  type: AccountType
}

/**
 * 高级用户信息
 */
export interface AdvancedSystemUserInfoVo {
  info: SystemUserInfoVo
  [key: string]: any
}
