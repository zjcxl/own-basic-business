import type { BaseDto, BaseMapVo, BaseQuery, BaseVo, YesNoType } from '../../../base'

export interface SystemDictionaryItemVo extends BaseVo {
  /**
   * 字典id
   */
  dictionaryId: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 数据项值
   */
  value: string
  /**
   * 图标
   */
  icon: string
  /**
   * 是否可用 1=可用 0=禁用
   */
  isEnable: YesNoType
  /**
   * 是否可编辑 1=可以 0=不可编辑
   */
  isEdit: YesNoType
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}

export interface SystemDictionaryItemMapVo extends BaseMapVo {
  /**
   * 字典id
   */
  dictionaryId: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 数据项值
   */
  value: string
  /**
   * 图标
   */
  icon: string
  /**
   * 是否可用 1=可用 0=禁用
   */
  isEnable: YesNoType
  /**
   * 是否可编辑 1=可以 0=不可编辑
   */
  isEdit: YesNoType
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}

export interface SystemDictionaryItemQuery extends BaseQuery {
  /**
   * 字典id
   */
  dictionaryId: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 数据项值
   */
  value: string
  /**
   * 是否可用 1=可用 0=禁用
   */
  isEnable: YesNoType
  /**
   * 是否可编辑 1=可以 0=不可编辑
   */
  isEdit: YesNoType
}

export interface SystemDictionaryItemDto extends BaseDto {
  /**
   * 字典id
   */
  dictionaryId: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 数据项值
   */
  value: string
  /**
   * 图标
   */
  icon: string
  /**
   * 是否可用 1=可用 0=禁用
   */
  isEnable: YesNoType
  /**
   * 是否可编辑 1=可以 0=不可编辑
   */
  isEdit: YesNoType
  /**
   * 顺序，默认数字越小约在前面
   */
  sortOrder: number
}
