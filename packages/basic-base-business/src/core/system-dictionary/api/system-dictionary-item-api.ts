import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { YesNoType } from 'packages/basic-base-business/src/base'
import type { SystemDictionaryItemDto, SystemDictionaryItemQuery, SystemDictionaryItemVo } from '../entity/system-dictionary-item-entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'm/system/dictionary/item'

/**
 * 分页查询信息
 */
export async function page(query?: Partial<SystemDictionaryItemQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemDictionaryItemVo>>(`${prefix}/page`, query).request()
}

/**
 * 查询全部信息
 */
export async function all(query?: Partial<SystemDictionaryItemQuery> | QueryObjectType) {
  return new PostRequestModel<Array<SystemDictionaryItemVo>>(`${prefix}/all`, query).request()
}

/**
 * 根据id获取信息
 * @param id 数据字典项id
 */
export async function getById(id: string) {
  return new GetRequestModel<SystemDictionaryItemVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 数据字典项id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<boolean>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: SystemDictionaryItemDto) {
  return new PostRequestModel<SystemDictionaryItemVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 数据字典项id
 * @param form 表单信息
 */
export async function updateById(id: string, form: SystemDictionaryItemDto) {
  return new PutRequestModel<SystemDictionaryItemVo>(`${prefix}/${id}`, form).request()
}

/**
 * 修改数据字典项的禁用状态
 * @param id 数据字典项id
 * @param enable 是否启用 1=启用 0=禁用
 */
export async function updateEnableById(id: string, enable: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/enable/${id}/${enable}`).request()
}
