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
function page(query: Partial<SystemRoleQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemRoleVo>>(`${prefix}/page`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
const getById = (id: string) => new GetRequestModel<SystemRoleVo>(`${prefix}/${id}`).request()

/**
 * 根据id删除信息
 * @param id 主键id
 */
const deleteById = (id: string) => new DeleteRequestModel<SystemRoleVo>(`${prefix}/${id}`).request()

/**
 * 新增
 * @param form 表单信息
 */
const add = (form: SystemRoleDto) => new PostRequestModel<SystemRoleVo>(`${prefix}/`, form).request()

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
const updateById = (id: string, form: SystemRoleDto) => new PutRequestModel<SystemRoleVo>(`${prefix}/${id}`, form).request()

/**
 * 修改禁用状态
 * @param id 主键id
 * @param isDisable 是否禁用 1=禁用 0=可用
 */
const updateDisableById = (id: string, isDisable: YesNoType) => new PutRequestModel<boolean>(`${prefix}/disable/${id}/${isDisable}`).request()

export default {
  page,
  add,
  getById,
  updateById,
  deleteById,
  updateDisableById,
}
