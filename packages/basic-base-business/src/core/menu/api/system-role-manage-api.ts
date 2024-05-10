import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { SystemRoleDto, SystemRoleQuery, SystemRoleVo } from '../entity'
import type { YesNoType } from '../../../base'

/**
 * 请求前缀
 */
const prefix = 'm/system/role'

/**
 * 分页查询信息
 */
export async function page(query?: Partial<SystemRoleQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemRoleVo>>(`${prefix}/page`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
export async function getById(id: string) {
  return new GetRequestModel<SystemRoleVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 主键id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<SystemRoleVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: SystemRoleDto) {
  return new PostRequestModel<SystemRoleVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
export async function updateById(id: string, form: SystemRoleDto) {
  return new PutRequestModel<SystemRoleVo>(`${prefix}/${id}`, form).request()
}

/**
 * 修改禁用状态
 * @param id 主键id
 * @param isDisable 是否禁用 1=禁用 0=可用
 */
export async function updateDisableById(id: string, isDisable: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/disable/${id}/${isDisable}`).request()
}
