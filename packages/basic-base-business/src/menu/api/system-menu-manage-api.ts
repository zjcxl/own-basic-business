import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel } from '@own-basic-component/config'
import type { SystemMenuDto, SystemMenuMapVo, SystemMenuVo } from '../entity'
import type { SystemMenuQuery } from '../entity/system-menu-query'
import type { TreeNode } from '../../base'

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
 * 查询当前用户的菜单树信息
 * @param query 查询参数
 */
function tree(query: Partial<SystemMenuQuery>) {
  return new PostRequestModel<Array<TreeNode<SystemMenuMapVo>>>(`${prefix}/tree`, query).request()
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

/**
 * 修改菜单的禁用状态
 * @param id 菜单id
 * @param isDisable 是否禁用 1=禁用 0=可用
 */
const updateDisableById = (id: string, isDisable: 0 | 1) => new PutRequestModel<boolean>(`${prefix}/disable/${id}/${isDisable}`).request()

/**
 * 修改菜单的显示状态
 * @param id 菜单id
 * @param idShow 是否显示 1=显示 0=隐藏
 */
const updateShowById = (id: string, idShow: 0 | 1) => new PutRequestModel<boolean>(`${prefix}/show/${id}/${idShow}`).request()

export default {
  page,
  tree,
  add,
  getById,
  updateById,
  deleteById,
  updateDisableById,
  updateShowById,
}
