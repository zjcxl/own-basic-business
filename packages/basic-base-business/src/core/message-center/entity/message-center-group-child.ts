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
   * 通知类型 inner=站内消息 app_notice=app通知
   */
  noticeType: string
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
   * 通知类型 inner=站内消息 app_notice=app通知
   */
  noticeType: string
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
   * 通知类型 inner=站内消息 app_notice=app通知
   */
  noticeType: string
  /**
   * 排序
   */
  sortOrder: number
}

export interface MessageCenterGroupChildSortItem {

  /**
   * 分组id
   */
  groupId: string
  /**
   * 详细id
   */
  childIdList: string[]

}
