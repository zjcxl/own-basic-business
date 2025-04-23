import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { YesNoType } from '../../../base'
import type { SystemAccountQuery, SystemAccountVo } from '../entity/system-account-entity'
import { DeleteRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'm/system/account'

/**
 * 分页查询
 * @param query 查询条件
 */
export async function all(query?: Partial<SystemAccountQuery> | QueryObjectType) {
  return new PostRequestModel<Array<SystemAccountVo>>(`${prefix}/all`, query).request()
}

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

/**
 * 根据id修改启用状态
 * @param id
 * @param enable
 */
export async function updateEnableById(id: string, enable: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/enable/${id}/${enable}`).request()
}
