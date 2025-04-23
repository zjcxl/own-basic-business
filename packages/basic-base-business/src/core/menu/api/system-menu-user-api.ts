import type { TreeNode } from '../../../base'
import type { SystemMenuMapVo } from '../entity/system-menu-entity'
import { GetRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'u/system/menu'

/**
 * 查询当前用户所有可用的菜单信息
 */
export async function all() {
  return new GetRequestModel<Array<SystemMenuMapVo>>(`${prefix}/all`).request()
}

/**
 * 查询当前用户的菜单树信息
 */
export async function tree() {
  return new GetRequestModel<Array<TreeNode<SystemMenuMapVo>>>(`${prefix}/tree`).request()
}
