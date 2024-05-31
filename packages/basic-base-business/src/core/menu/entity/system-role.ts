import type { BaseDto, BaseMapVo, BaseQuery, BaseVo, YesNoType } from '../../../base'
import type { SystemRolePermissionDto, SystemRolePermissionVo } from './'

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
  isDisable: YesNoType
  /**
   * 权限列表
   * key: 菜单id
   * value: 权限值
   */
  permissions: Array<Omit<SystemRolePermissionDto, 'roleId'>>
}

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
  isDisable: YesNoType
}

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

export interface SystemRoleMapVo extends BaseMapVo {
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
