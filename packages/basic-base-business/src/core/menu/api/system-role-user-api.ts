import { GetRequestModel, PostRequestModel } from '@own-basic-component/request'
import type { PageResultModel } from '@own-basic-component/config'
import type { SystemRoleVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/system/role/user'

/**
 * 绑定角色信息
 * @param userId 用户id
 * @param ids 角色id
 */
export async function bind(userId: string, ids: string[]) {
  return new PostRequestModel<PageResultModel<SystemRoleVo>>(`${prefix}/bind/${userId}`, { ids }).request()
}

/**
 * 根据用户id查询绑定的角色信息
 * @param userId 用户id
 */
export async function listRoleIdListByUserId(userId: string) {
  return new GetRequestModel<SystemRoleVo>(`${prefix}/bind/${userId}`).request()
}
