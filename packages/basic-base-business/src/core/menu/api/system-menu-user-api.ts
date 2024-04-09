import { GetRequestModel } from '@own-basic-component/request'
import type { TreeNode } from '../../../base'
import type { SystemMenuMapVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'u/system/menu'

/**
 * 查询当前用户所有可用的菜单信息
 */
const all = () => new GetRequestModel<Array<SystemMenuMapVo>>(`${prefix}/all`).request()

/**
 * 查询当前用户的菜单树信息
 */
const tree = () => new GetRequestModel<Array<TreeNode<SystemMenuMapVo>>>(`${prefix}/tree`).request()

export default {
  all,
  tree,
}
