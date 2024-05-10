import { PostRequestModel } from '@own-basic-component/request'
import type { QueryObjectType } from '@own-basic-component/config'
import type { LogOperationStatsTimeRangeQuery } from '../entity'
import type { ChildrenItemModel, ItemCountModel } from '../../../base'

const API_PREFIX = 'm/log/operation/stats'

/**
 * 根据时间信息查询统计数据
 * @param query
 */
export async function statsForTimeRange(
  query?: Partial<LogOperationStatsTimeRangeQuery> | QueryObjectType,
) {
  return new PostRequestModel<Array<ChildrenItemModel<ItemCountModel, ItemCountModel>>>(`${API_PREFIX}/time/range`, query).request()
}

/**
 * 统计时间范围内的用户id操作次数
 * @param query
 */
export async function statsForUserTimeRange(
  query?: Partial<LogOperationStatsTimeRangeQuery> | QueryObjectType,
) {
  return new PostRequestModel<Array<ChildrenItemModel<ItemCountModel, ItemCountModel>>>(`${API_PREFIX}/user/time/range`, query).request()
}

/**
 * 统计时间范围内的用户id数量
 * @param query
 */
export async function statsForUserCountTimeRange(
  query?: Partial<LogOperationStatsTimeRangeQuery> | QueryObjectType,
) {
  return new PostRequestModel<Array<ItemCountModel>>(`${API_PREFIX}/user/count/time/range`, query).request()
}

/**
 * 统计时间范围内的设备数量
 * @param query
 */
export async function statsForDeviceCountTimeRange(
  query?: Partial<LogOperationStatsTimeRangeQuery> | QueryObjectType,
) {
  return new PostRequestModel<Array<ChildrenItemModel<ItemCountModel, ItemCountModel>>>(`${API_PREFIX}/device/count/time/range`, query).request()
}
