import { GetRequestModel } from '@own-basic-component/request'
import type { TreeNode } from '../../base'
import type { SystemMenuMapVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'u/system/menu'

/**
 * 查询当前用户的菜单树信息
 */
function tree() {
  return new GetRequestModel<Array<TreeNode<SystemMenuMapVo>>>(`${prefix}/tree`).request()
}

export default {
  tree,
}
