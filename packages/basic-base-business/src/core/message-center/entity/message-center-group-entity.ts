import type { BaseDto, BaseMapVo, BaseQuery, BaseVo, YesNoType } from '../../../base'

export interface MessageCenterGroupVo extends BaseVo {
  /**
   * 封面
   */
  cover: string
  /**
   * 图标
   */
  icon: string
  /**
   * 选中的图标
   */
  selectedIcon: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 类型名称
   */
  name: string
  /**
   * 是否显示（0=不显示 1=显示）
   */
  isShow: YesNoType
}

export interface MessageCenterGroupMapVo extends BaseMapVo {
  /**
   * 封面
   */
  cover: string
  /**
   * 图标
   */
  icon: string
  /**
   * 选中的图标
   */
  selectedIcon: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 类型名称
   */
  name: string
  /**
   * 是否显示（0=不显示 1=显示）
   */
  isShow: YesNoType
  /**
   * 排序
   */
  sortOrder: number
}

export interface MessageCenterGroupQuery extends BaseQuery {
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 类型名称
   */
  name: string
  /**
   * 是否显示（0=不显示 1=显示）
   */
  isShow: YesNoType
}

export interface MessageCenterGroupDto extends BaseDto {
  /**
   * 封面
   */
  cover: string
  /**
   * 图标
   */
  icon: string
  /**
   * 选中的图标
   */
  selectedIcon: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 类型名称
   */
  name: string
  /**
   * 是否显示（0=不显示 1=显示）
   */
  isShow: YesNoType
  /**
   * 排序
   */
  sortOrder: number
}
