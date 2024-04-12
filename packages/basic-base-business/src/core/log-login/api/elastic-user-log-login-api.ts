import {
  GetRequestCacheModel,
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { LogLoginVo } from '../entity'

const API_PREFIX = 'u/log/login'

export default {

  /**
   * 分页查询数据信息
   * @param query 查询条件
   */
  page: (query?: QueryObjectType) => new PostRequestModel<PageResultModel<LogLoginVo>>(`${API_PREFIX}/page`, query, {
    preprocess(data) {
      (data.data?.list || []).forEach((item) => {
        if (item.ip)
          item.ip = item.ip.split(',')?.[0]?.trim() || ''
        try {
          const data = JSON.parse(item.extra).data as Record<string, string>
          item.deviceName = data.deviceName || ''
          item.systemName = data.systemName || ''
          item.systemVersion = data.systemVersion || ''
        }
        catch (e) {
          console.error(e)
        }
      })
      return data
    },
  }).request(),

  /**
   * 根据操作日志id查询信息
   * @param id 操作日志id
   */
  getById: (id: string) => new GetRequestCacheModel<LogLoginVo>(`${API_PREFIX}/${id}`).request(),

  /**
   * 根据链路追踪id查询信息
   * @param traceId 链路追踪id
   */
  getByTraceId: (traceId: string) => new GetRequestCacheModel<LogLoginVo>(`${API_PREFIX}/trace/${traceId}`).request(),

}
