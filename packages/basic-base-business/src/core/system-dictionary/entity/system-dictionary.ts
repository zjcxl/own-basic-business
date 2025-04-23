import type { BaseDto, BaseMapVo, BaseQuery, BaseVo } from '../../../base'

export interface SystemDictionaryVo extends BaseVo {
  /**
   * 字典名称
   */
  name: string
  /**
   * 唯一编号
   */
  code: string
  /**
   * 图标
   */
  icon: string
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}

export interface SystemDictionaryMapVo extends BaseMapVo {
  /**
   * 字典名称
   */
  name: string
  /**
   * 唯一编号
   */
  code: string
  /**
   * 图标
   */
  icon: string
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}

export interface SystemDictionaryQuery extends BaseQuery {
  /**
   * 字典名称
   */
  name: string
  /**
   * 唯一编号
   */
  code: string
}

export interface SystemDictionaryDto extends BaseDto {
  /**
   * 字典名称
   */
  name: string
  /**
   * 唯一编号
   */
  code: string
  /**
   * 图标
   */
  icon: string
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}
