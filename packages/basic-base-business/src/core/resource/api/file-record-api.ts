import { DeleteRequestModel, GetRequestModel, PostRequestModel } from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { FileRecordDto, FileRecordQuery, FileRecordVo } from '../entity'

/**
 * 请求前缀
 */
const prefix = 'file/record'

export default {

  /**
   * 分页查询文件信息
   * @param query 查询条件
   */
  page: (query?: Partial<FileRecordQuery> | QueryObjectType) => new PostRequestModel<PageResultModel<FileRecordVo>>(`${prefix}/page`, query).request(),
  /**
   * 保存文件信息
   * @param form 新增表单
   */
  add: (form: FileRecordDto) => new PostRequestModel<FileRecordVo>(`${prefix}/`, form).request(),
  /**
   * 根据文件id获取文件信息
   * @param fileId
   */
  get: (fileId: string) => new GetRequestModel<FileRecordVo>(`${prefix}/${fileId}`).request(),
  /**
   * 删除文件信息
   * @param fileId
   */
  delete: (fileId: string) => new DeleteRequestModel<boolean>(`${prefix}/${fileId}`).request(),
  /**
   * 批量删除文件信息
   * @param fileIdArray
   */
  deleteBatch: (fileIdArray: Array<string>) => {
    const fileIds = fileIdArray.join(',')
    return new DeleteRequestModel<boolean>(`${prefix}/batch/${fileIds}`).request()
  },

}
