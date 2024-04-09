import {
  GetRequestCacheModel,
  PostRequestModel,
} from '@own-basic-component/request'
import type { QueryObjectType } from '@own-basic-component/config'
import type { LogOperationVo } from '../entity'
import type { PageModel } from '../../../base'

const API_PREFIX = 'u/log/operation'

export default {

  /**
   * 分页查询数据信息
   * @param query 查询条件
   */
  page: (query?: QueryObjectType) => new PostRequestModel<PageModel<LogOperationVo>>(`${API_PREFIX}/page`, query, {
    preprocess(data) {
      (data.data?.list || []).forEach((item) => {
        if (item.ip)
          item.ip = item.ip.split(',')?.[0]?.trim() || ''
      })
      return data
    },
  }).request(),

  /**
   * 根据操作日志id查询信息
   * @param id 操作日志id
   */
  getById: (id: string) => new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/${id}`).request(),

  /**
   * 根据链路追踪id查询信息
   * @param traceId 链路追踪id
   */
  getByTraceId: (traceId: string) => new GetRequestCacheModel<LogOperationVo>(`${API_PREFIX}/trace/${traceId}`).request(),

}
