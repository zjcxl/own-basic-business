import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { SystemMenuDto, SystemMenuMapVo, SystemMenuQuery, SystemMenuSortFormItem, SystemMenuVo } from '../entity'
import type { TreeNode, YesNoType } from '../../../base'

/**
 * 请求前缀
 */
const prefix = 'm/system/menu'

/**
 * 分页查询信息
 */
export async function page(query?: Partial<SystemMenuQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemMenuVo>>(`${prefix}/page`, query).request()
}

/**
 * 查询当前用户的菜单树信息
 * @param query 查询参数
 */
export async function tree(query?: Partial<SystemMenuQuery> | QueryObjectType) {
  return new PostRequestModel<Array<TreeNode<SystemMenuMapVo>>>(`${prefix}/tree`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
export async function getById(id: string) {
  return new GetRequestModel<SystemMenuVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 主键id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<SystemMenuVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: SystemMenuDto) {
  return new PostRequestModel<SystemMenuVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
export async function updateById(id: string, form: SystemMenuDto) {
  return new PutRequestModel<SystemMenuVo>(`${prefix}/${id}`, form).request()
}

/**
 * 修改菜单的禁用状态
 * @param id 菜单id
 * @param isDisable 是否禁用 1=禁用 0=可用
 */
export async function updateDisableById(id: string, isDisable: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/disable/${id}/${isDisable}`).request()
}

/**
 * 修改菜单的显示状态
 * @param id 菜单id
 * @param show 是否显示 1=显示 0=隐藏
 */
export async function updateShowById(id: string, show: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/show/${id}/${show}`).request()
}

/**
 * 高级排序
 * @param itemList
 */
export async function sort(itemList: SystemMenuSortFormItem[]) {
  return new PutRequestModel<boolean>(`${prefix}/advanced/sort`, { itemList }).request()
}
