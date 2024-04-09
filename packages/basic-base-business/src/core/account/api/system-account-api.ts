import { PostRequestModel } from '@own-basic-component/request'
import type { SystemAccountVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'm/system/account'

/**
 * 根据用户id查询账号列表
 * @param userId 查询条件
 */
function listByUserId(userId: string) {
  return new PostRequestModel<Array<SystemAccountVo>>(`${prefix}/all/${userId}`).request()
}

export default {
  listByUserId,
}
