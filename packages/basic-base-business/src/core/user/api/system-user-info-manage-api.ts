import { GetRequestModel, PostRequestModel, PutRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { SystemUserInfoQuery, SystemUserInfoVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/system/user/info'

/**
 * 分页查询
 * @param query 查询条件
 */
export async function page(query?: Partial<SystemUserInfoQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemUserInfoVo>>(`${prefix}/page`, query).request()
}

/**
 * 修改头像
 * @param userId
 * @param avatar
 */
export async function updateAvatar(userId: string, avatar: string) {
  return new PutRequestModel<boolean>(`${prefix}/update/avatar`, {
    userId,
    avatar,
  }).request()
}

/**
 * 根据用户id获取用户详细信息
 * @param userId
 */
export async function getByUserId(userId: string) {
  return new GetRequestModel<SystemUserInfoVo>(`${prefix}/user/id/${userId}`).request()
}
