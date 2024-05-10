import {
  GetRequestCacheModel,
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType, ResultModel } from '@own-basic-component/config'
import type { LogLoginVo } from '../entity'

const API_PREFIX = 'm/log/login'

/**
 * 分页查询数据信息
 * @param query 查询条件
 */
export async function page(query?: QueryObjectType): Promise<ResultModel<PageResultModel<LogLoginVo>>> {
  return new PostRequestModel<PageResultModel<LogLoginVo>>(`${API_PREFIX}/page`, query)
    .request()
    .then((data) => {
      (data.data?.list || []).forEach((item) => {
        if (item.ip)
          item.ip = item.ip.split(',')?.[0]?.trim() || ''
        const data = JSON.parse(item.extra).data as Record<string, string>
        item.deviceName = data.deviceName || ''
        item.systemName = data.systemName || ''
        item.systemVersion = data.systemVersion || ''
      })
      return data
    })
}

/**
 * 根据操作日志id查询信息
 * @param id 操作日志id
 */
export async function getById(id: string) {
  return new GetRequestCacheModel<LogLoginVo>(`${API_PREFIX}/${id}`).request()
}

/**
 * 根据链路追踪id查询信息
 * @param traceId 链路追踪id
 */
export async function getByTraceId(traceId: string) {
  return new GetRequestCacheModel<LogLoginVo>(`${API_PREFIX}/trace/${traceId}`).request()
}
