import {
  GetRequestCacheModel,
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType, ResultModel } from '@own-basic-component/config'
import type { LogOperationVo } from '../entity'
import { resolveOperationHeader } from '../../../base/utils/operation-header-info'

const API_PREFIX = 'u/log/operation'

/**
 * 分页查询数据信息
 * @param query 查询条件
 */
export async function page(query?: QueryObjectType): Promise<ResultModel<PageResultModel<LogOperationVo>>> {
  return new PostRequestModel<PageResultModel<LogOperationVo>>(`${API_PREFIX}/page`, query)
    .request()
    .then((data) => {
      (data.data?.list || []).forEach((item) => {
        if (item.ip)
          item.ip = item.ip.split(',')?.[0]?.trim() || ''
        item.headerObject = resolveOperationHeader(item.headerParams)
      })
      return data
    })
}

/**
 * 根据操作日志id查询信息
 * @param id 操作日志id
 */
export async function getById(id: string) {
  return new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/${id}`).request()
    .then((data) => {
      if (data.data.ip)
        data.data.ip = data.data.ip.split(',')?.[0]?.trim() || ''
      data.data.headerObject = resolveOperationHeader(data.data.headerParams)
      return data
    })
}

/**
 * 根据链路追踪id查询信息
 * @param traceId 链路追踪id
 */
export async function getByTraceId(traceId: string) {
  return new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/trace/${traceId}`).request()
    .then((data) => {
      if (data.data.ip)
        data.data.ip = data.data.ip.split(',')?.[0]?.trim() || ''
      data.data.headerObject = resolveOperationHeader(data.data.headerParams)
      return data
    })
}
