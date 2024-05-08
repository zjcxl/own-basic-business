import type { BaseQuery } from '../../../base'

export interface ElasticsearchIndexManagementVo {
  /**
   * 索引id
   */
  uuid: string
  /**
   * 索引名称
   */
  indexName: string
  /**
   * 健康状态
   */
  health: string
  /**
   * 状态
   */
  status: string
  /**
   * 分片数量
   */
  replicas: number
  /**
   * 文档数量
   */
  docsCount: number
  /**
   * 存储大小（byte）
   */
  storageSize: BigInt64Array
}

export interface ElasticsearchIndexManagementQuery extends BaseQuery {

}
