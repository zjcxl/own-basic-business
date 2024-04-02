import type { BaseDto } from '../../../base'

export interface SystemRolePermissionDto extends BaseDto {
  /**
   * 角色id
   */
  roleId: string
  /**
   * 菜单id
   */
  menuId: string
  /**
   * 权限标识
   */
  permission: string
}
