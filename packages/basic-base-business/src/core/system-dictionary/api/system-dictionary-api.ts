import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { SystemDictionaryDto, SystemDictionaryQuery, SystemDictionaryVo } from '../entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'm/system/dictionary'

/**
 * 分页查询信息
 */
export async function page(query?: Partial<SystemDictionaryQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemDictionaryVo>>(`${prefix}/page`, query).request()
}

/**
 * 查询全部信息
 */
export async function all(query?: Partial<SystemDictionaryQuery> | QueryObjectType) {
  return new PostRequestModel<Array<SystemDictionaryVo>>(`${prefix}/all`, query).request()
}

/**
 * 根据id获取信息
 * @param id 数据字典id
 */
export async function getById(id: string) {
  return new GetRequestModel<SystemDictionaryVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 数据字典id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<SystemDictionaryVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: SystemDictionaryDto) {
  return new PostRequestModel<SystemDictionaryVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 数据字典id
 * @param form 表单信息
 */
export async function updateById(id: string, form: SystemDictionaryDto) {
  return new PutRequestModel<SystemDictionaryVo>(`${prefix}/${id}`, form).request()
}
