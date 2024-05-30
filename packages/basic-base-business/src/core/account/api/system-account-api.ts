import { DeleteRequestModel, PostRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { SystemAccountQuery, SystemAccountVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/system/account'

/**
 * 分页查询
 * @param query 查询条件
 */
export async function page(query?: Partial<SystemAccountQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemAccountVo>>(`${prefix}/page`, query).request()
}

/**
 * 根据id删除信息
 * @param id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<boolean>(`${prefix}/${id}`).request()
}
