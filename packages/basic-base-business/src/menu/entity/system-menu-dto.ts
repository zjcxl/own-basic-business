import type { BaseDto } from '../../base'

export interface SystemMenuDto extends BaseDto {

  /**
   * 菜单编码
   */
  code: string
  /**
   * 菜单标题
   */
  title: string
  /**
   * 父级菜单id
   */
  parentId: string
  /**
   * 菜单路径
   */
  path: string
  /**
   * 菜单图标
   */
  icon: string
  /**
   * 是否禁用 1=禁用 0=可用
   */
  isDisable: 0 | 1
  /**
   * 是否显示 1=显示 0=隐藏
   */
  isShow: 0 | 1
  /**
   * 权限标识
   */
  permission: string
  /**
   * 排序
   */
  sortOrder: number
  /**
   * 客户端id
   */
  clientId: string
  /**
   * 菜单链名称
   */
  chainName: string
  /**
   * 菜单链ids
   */
  chainIds: string

}
