import type { PageResultModel, QueryObjectType, ResultModel } from '@own-basic-component/config'
import type { ElasticsearchIndexManagementQuery, ElasticsearchIndexManagementVo } from '../entity/elasticsearch-index-management-entity'
import {
  DeleteRequestModel,
  PostRequestModel,
} from '@own-basic-component/request'

const API_PREFIX = 'm/elasticsearch/index/management'

/**
 * 分页查询数据信息
 * @param query 查询条件
 */
export async function page(query?: Partial<ElasticsearchIndexManagementQuery> | QueryObjectType): Promise<ResultModel<PageResultModel<ElasticsearchIndexManagementVo>>> {
  return new PostRequestModel<PageResultModel<ElasticsearchIndexManagementVo>>(`${API_PREFIX}/page`, query).request()
}

/**
 * 删除索引
 * @param index 索引名称
 */
export async function deleteIndex(index: string): Promise<ResultModel<boolean>> {
  return new DeleteRequestModel<boolean>(`${API_PREFIX}/${index}`, {}).request()
}

/**
 * 批量删除索引
 * @param indexList 索引名称
 */
export async function deleteIndexBatch(indexList: string[]): Promise<ResultModel<boolean>> {
  return new DeleteRequestModel<boolean>(`${API_PREFIX}/batch`, { indexList }).request()
}
