import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type {
  MessageCenterGroupChildDto,
  MessageCenterGroupChildMapVo,
  MessageCenterGroupChildQuery,
  MessageCenterGroupChildVo,
} from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/message/center/group/child'

/**
 * 查询所有信息
 */
export async function all(query?: Partial<MessageCenterGroupChildQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterGroupChildVo>>(`${prefix}/all`, query).request()
}

/**
 * 分页查询信息
 */
export async function page(query?: Partial<MessageCenterGroupChildQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterGroupChildVo>>(`${prefix}/page`, query).request()
}

/**
 * 分页查询信息
 */
export async function map(query?: Partial<MessageCenterGroupChildQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterGroupChildMapVo>>(`${prefix}/map`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
export async function getById(id: string) {
  return new GetRequestModel<MessageCenterGroupChildVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 主键id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<MessageCenterGroupChildVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: MessageCenterGroupChildDto) {
  return new PostRequestModel<MessageCenterGroupChildVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
export async function updateById(id: string, form: MessageCenterGroupChildDto) {
  return new PutRequestModel<MessageCenterGroupChildVo>(`${prefix}/${id}`, form).request()
}
