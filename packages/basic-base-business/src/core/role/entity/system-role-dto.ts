import type { BaseDto } from '../../../base'
import type { SystemRolePermissionVo } from './system-role-permission-vo'

export interface SystemRoleDto extends BaseDto {
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
   * key: 菜单id
   * value: 权限值
   */
  permissions: Array<Omit<SystemRolePermissionVo, 'roleId'>>
}
