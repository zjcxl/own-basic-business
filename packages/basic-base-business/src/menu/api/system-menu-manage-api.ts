import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel } from '@own-basic-component/config'
import type { SystemMenuDto, SystemMenuVo } from '../entity'
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

/**
 * 根据id获取信息
 * @param id 主键id
 */
const getById = (id: string) => new GetRequestModel<SystemMenuVo>(`${prefix}/${id}`).request()

/**
 * 根据id删除信息
 * @param id 主键id
 */
const deleteById = (id: string) => new DeleteRequestModel<SystemMenuVo>(`${prefix}/${id}`).request()

/**
 * 新增
 * @param form 表单信息
 */
const add = (form: SystemMenuDto) => new PostRequestModel<SystemMenuVo>(`${prefix}/`, form).request()

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
const updateById = (id: string, form: SystemMenuDto) => new PutRequestModel<SystemMenuVo>(`${prefix}/${id}`, form).request()

export default {
  page,
  add,
  getById,
  updateById,
  deleteById,
}
