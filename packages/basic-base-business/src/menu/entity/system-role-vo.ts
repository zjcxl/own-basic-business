import type { BaseVo } from '../../base'
import type { SystemRolePermissionVo } from './system-role-permission-vo'

export interface SystemRoleVo extends BaseVo {

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

  /**
   * 权限列表
   */
  permissions: Array<Omit<SystemRolePermissionVo, 'roleId'>>

}