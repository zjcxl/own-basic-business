import type { BaseVo } from '../../../base'
import type { SystemRolePermissionVo } from './'

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
   * key: 菜单id
   * value: 权限值
   */
  permissions: Array<Omit<SystemRolePermissionVo, 'roleId'>>
}
