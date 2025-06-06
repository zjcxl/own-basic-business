import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { YesNoType } from '../../../base'
import type {
  MessageCenterGroupDto,
  MessageCenterGroupMapVo,
  MessageCenterGroupQuery,
  MessageCenterGroupVo,
} from '../entity/message-center-group-entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'm/message/center/group'

/**
 * 查询所有信息
 */
export async function all(query?: Partial<MessageCenterGroupQuery> | QueryObjectType) {
  return new PostRequestModel<Array<MessageCenterGroupVo>>(`${prefix}/all`, query).request()
}

/**
 * 分页查询信息
 */
export async function page(query?: Partial<MessageCenterGroupQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterGroupVo>>(`${prefix}/page`, query).request()
}

/**
 * 分页查询信息
 */
export async function map(query?: Partial<MessageCenterGroupQuery> | QueryObjectType) {
  return new PostRequestModel<Array<MessageCenterGroupMapVo>>(`${prefix}/map`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
export async function getById(id: string) {
  return new GetRequestModel<MessageCenterGroupVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 主键id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<MessageCenterGroupVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: MessageCenterGroupDto) {
  return new PostRequestModel<MessageCenterGroupVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
export async function updateById(id: string, form: MessageCenterGroupDto) {
  return new PutRequestModel<MessageCenterGroupVo>(`${prefix}/${id}`, form).request()
}

/**
 * 修改显示状态
 * @param id 主键id
 * @param show 是否显示 1=显示 0=隐藏
 */
export async function updateShowById(id: string, show: YesNoType) {
  return new PutRequestModel<boolean>(`${prefix}/show/${id}/${show}`).request()
}
