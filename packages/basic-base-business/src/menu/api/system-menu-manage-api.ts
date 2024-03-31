import { PostRequestModel } from '@own-basic-component/request'
import type { PageResultModel } from '@own-basic-component/config'
import type { SystemMenuVo } from '../entity'
import type { SystemMenuQuery } from '../entity/system-menu-query'

/**
 * 请求前缀
 */
const prefix = 'm/system/menu'

/**
 * 分页查询信息
 */
function page(query: Partial<SystemMenuQuery>) {
  return new PostRequestModel<PageResultModel<SystemMenuVo>>(`${prefix}/page`, query).request()
}

export default {
  page,
}
