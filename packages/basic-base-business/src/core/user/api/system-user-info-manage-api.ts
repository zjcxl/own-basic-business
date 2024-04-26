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
function page(query?: Partial<SystemUserInfoQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<SystemUserInfoVo>>(`${prefix}/page`, query).request()
}

/**
 * 修改头像
 * @param userId
 * @param avatar
 */
function updateAvatar(userId: string, avatar: string) {
  return new PutRequestModel<boolean>(`${prefix}/update/avatar`, {
    userId,
    avatar,
  }).request()
}

/**
 * 根据用户id获取用户详细信息
 * @param userId
 */
function getByUserId(userId: string) {
  return new GetRequestModel<SystemUserInfoVo>(`${prefix}/user/id/${userId}`).request()
}

// todo 新增
// todo 修改
// todo 删除
// todo 查看详情

export default {
  page,
  updateAvatar,
  getByUserId,
}
