import type { BaseBeanVo } from '../../base'

export interface SystemRolePermissionVo extends BaseBeanVo {

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
