import type { BaseDto, BaseMapVo, BaseQuery, BaseVo } from '../../../base'

export interface MessageCenterGroupChildVo extends BaseVo {
  /**
   * 分组id
   */
  groupId: string
  /**
   * 分组key（冗余）
   */
  groupKey: string
  /**
   * 消息名称
   */
  name: string
  /**
   * 消息key
   */
  messageKey: string
  /**
   * 排序
   */
  sortOrder: number
}

export interface MessageCenterGroupChildMapVo extends BaseMapVo {
  /**
   * 分组id
   */
  groupId: string
  /**
   * 分组key（冗余）
   */
  groupKey: string
  /**
   * 消息名称
   */
  name: string
  /**
   * 消息key
   */
  messageKey: string
  /**
   * 排序
   */
  sortOrder: number
}

export interface MessageCenterGroupChildQuery extends BaseQuery {
  /**
   * 分组id
   */
  groupId: string
  /**
   * 分组key（冗余）
   */
  groupKey: string
  /**
   * 消息名称
   */
  name: string
  /**
   * 消息key
   */
  messageKey: string
}

export interface MessageCenterGroupChildDto extends BaseDto {
  /**
   * 分组id
   */
  groupId: string
  /**
   * 分组key（冗余）
   */
  groupKey: string
  /**
   * 消息名称
   */
  name: string
  /**
   * 消息key
   */
  messageKey: string
  /**
   * 排序
   */
  sortOrder: number
}
