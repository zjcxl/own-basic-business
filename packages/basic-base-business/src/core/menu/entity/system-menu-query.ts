import type { BaseQuery, YesNoType } from '../../../base'

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
  isDisable: YesNoType
  /**
   * 是否显示 1=显示 0=隐藏
   */
  isShow: YesNoType
  /**
   * 客户端id
   */
  clientId: string

}
