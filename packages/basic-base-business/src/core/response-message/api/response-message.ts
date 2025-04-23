import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { ResponseMessageConfigAdvancedVo, ResponseMessageConfigForm, ResponseMessageConfigQuery } from '../entity/response-message-entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel } from '@own-basic-component/request'

const prefix = 'm/response/message/config'

/**
 * 查询所有信息
 */
export async function all(query?: Partial<ResponseMessageConfigQuery> | QueryObjectType) {
  return new PostRequestModel<Array<ResponseMessageConfigAdvancedVo>>(`${prefix}/all`, query).request()
}

/**
 * 分页查询信息
 */
export async function page(query?: Partial<ResponseMessageConfigQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<ResponseMessageConfigAdvancedVo>>(`${prefix}/page`, query).request()
}

/**
 * 新增
 * @param originCode 源code
 * @param form 表单信息
 */
export async function saveByOriginCode(
  originCode: string,
  form: ResponseMessageConfigForm,
) {
  return new PostRequestModel<boolean>(`${prefix}/save/${originCode}`, form).request()
}

/**
 * 根据源code获取信息
 * @param originCode 源code
 */
export async function getByOriginCode(originCode: string) {
  return new GetRequestModel<ResponseMessageConfigAdvancedVo>(`${prefix}/code/${originCode}`).request()
}

/**
 * 根据源code删除信息
 * @param originCode 源code
 */
export async function deleteByOriginCode(originCode: string) {
  return new DeleteRequestModel<boolean>(`${prefix}/code/${originCode}`).request()
}
