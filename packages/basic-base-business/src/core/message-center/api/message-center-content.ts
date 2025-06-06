import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { MessageCenterContentDto, MessageCenterContentQuery, MessageCenterContentVo } from '../entity/message-center-content-entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'm/message/center/content'

/**
 * 查询所有信息
 */
export async function all(query?: Partial<MessageCenterContentQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterContentVo>>(`${prefix}/all`, query).request()
}

/**
 * 分页查询信息
 */
export async function page(query?: Partial<MessageCenterContentQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<MessageCenterContentVo>>(`${prefix}/page`, query).request()
}

/**
 * 根据id获取信息
 * @param id 主键id
 */
export async function getById(id: string) {
  return new GetRequestModel<MessageCenterContentVo>(`${prefix}/${id}`).request()
}

/**
 * 根据id删除信息
 * @param id 主键id
 */
export async function deleteById(id: string) {
  return new DeleteRequestModel<MessageCenterContentVo>(`${prefix}/${id}`).request()
}

/**
 * 新增
 * @param form 表单信息
 */
export async function add(form: MessageCenterContentDto) {
  return new PostRequestModel<MessageCenterContentVo>(`${prefix}/`, form).request()
}

/**
 * 修改
 * @param id 主键id
 * @param form 表单信息
 */
export async function updateById(id: string, form: MessageCenterContentDto) {
  return new PutRequestModel<MessageCenterContentVo>(`${prefix}/${id}`, form).request()
}
