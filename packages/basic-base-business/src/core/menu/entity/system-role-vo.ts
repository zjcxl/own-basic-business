import type { BaseVo, YesNoType } from '../../../base'
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
  isDisable: YesNoType
  /**
   * 权限列表
   * key: 菜单id
   * value: 权限值
   */
  permissions: Array<Omit<SystemRolePermissionVo, 'roleId'>>
}
