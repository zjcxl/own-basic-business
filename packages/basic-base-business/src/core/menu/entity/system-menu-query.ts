import type { BaseQuery } from '../../../base'

export interface SystemMenuQuery extends BaseQuery {

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
   * 是否禁用 1=禁用 0=可用
   */
  isDisable: 0 | 1
  /**
   * 是否显示 1=显示 0=隐藏
   */
  isShow: 0 | 1
  /**
   * 客户端id
   */
  clientId: string

}
