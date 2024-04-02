import { PostRequestModel } from '@own-basic-component/request'
import type { QueryObjectType } from '@own-basic-component/config'
import type { PageModel } from '../../../base'
import type { SystemUserInfoQuery, SystemUserInfoVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/system/user/info'

/**
 * 分页查询
 * @param query 查询条件
 */
function page(query: Partial<SystemUserInfoQuery> | QueryObjectType) {
  return new PostRequestModel<PageModel<SystemUserInfoVo>>(`${prefix}/page`, query).request()
}

// todo 新增
// todo 修改
// todo 删除
// todo 查看详情

export default {
  page,
}
