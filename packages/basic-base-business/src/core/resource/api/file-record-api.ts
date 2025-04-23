import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type { FileRecordDto, FileRecordQuery, FileRecordVo } from '../entity'
import { DeleteRequestModel, GetRequestModel, PostRequestModel } from '@own-basic-component/request'

/**
 * 请求前缀
 */
const prefix = 'file/record'

/**
 * 分页查询文件信息
 * @param query 查询条件
 */
export async function page(query?: Partial<FileRecordQuery> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<FileRecordVo>>(`${prefix}/page`, query).request()
}
/**
 * 保存文件信息
 * @param form 新增表单
 */
export async function add(form: FileRecordDto) {
  return new PostRequestModel<FileRecordVo>(`${prefix}/`, form).request()
}
/**
 * 根据文件id获取文件信息
 * @param fileId
 */
export async function get(fileId: string) {
  return new GetRequestModel<FileRecordVo>(`${prefix}/${fileId}`).request()
}
/**
 * 删除文件信息
 * @param fileId
 */
export async function deleteById(fileId: string) {
  return new DeleteRequestModel<boolean>(`${prefix}/${fileId}`).request()
}
/**
 * 批量删除文件信息
 * @param fileIdArray
 */
export async function deleteBatch(fileIdArray: Array<string>) {
  const fileIds = fileIdArray.join(',')
  return new DeleteRequestModel<boolean>(`${prefix}/batch/${fileIds}`).request()
}
