import {
  GetRequestCacheModel,
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType, ResultModel } from '@own-basic-component/config'
import type { LogOperationQuery, LogOperationVo } from '../entity'

const API_PREFIX = 'm/log/operation'

/**
 * 分页查询数据信息
 * @param query 查询条件
 */
export function page(query?: Partial<LogOperationQuery> | QueryObjectType): Promise<ResultModel<PageResultModel<LogOperationVo>>> {
  return new Promise((resolve) => {
    new PostRequestModel<PageResultModel<LogOperationVo>>(`${API_PREFIX}/page`, query)
      .request()
      .then((data) => {
        (data.data?.list || []).forEach((item) => {
          if (item.ip)
            item.ip = item.ip.split(',')?.[0]?.trim() || ''
        })
        resolve(data)
      })
  })
}

/**
 * 根据操作日志id查询信息
 * @param id 操作日志id
 */
export function getById(id: string) {
  return new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/${id}`).request()
}

/**
 * 根据链路追踪id查询信息
 * @param traceId 链路追踪id
 */
export function getByTraceId(traceId: string) {
  return new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/trace/${traceId}`).request()
}
