import {
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType, ResultModel } from '@own-basic-component/config'
import type { ElasticsearchIndexManagementQuery, ElasticsearchIndexManagementVo } from '../entity'

const API_PREFIX = 'm/elasticsearch/index/management'

/**
 * 分页查询数据信息
 * @param query 查询条件
 */
function page(query?: Partial<ElasticsearchIndexManagementQuery> | QueryObjectType): Promise<ResultModel<PageResultModel<ElasticsearchIndexManagementVo>>> {
  return new PostRequestModel<PageResultModel<ElasticsearchIndexManagementVo>>(`${API_PREFIX}/page`, query)
    .request()
}

export default {
  page,
}
