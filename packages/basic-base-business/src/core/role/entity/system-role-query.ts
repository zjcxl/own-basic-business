import type { BaseQuery } from '../../../base'

export interface SystemRoleQuery extends BaseQuery {
  /**
   * 角色名称
   */
  name: string
  /**
   * 客户端id
   */
  clientId: string
  /**
   * 是否禁用 1=禁用 0=可用
   */
  isDisable: 0 | 1
}
