import type { BaseDto, BaseQuery, BaseVo, YesNoType } from '../../../base'

export interface MessageCenterContentVo extends BaseVo {
  /**
   * 接收消息的用户id
   */
  receiveId: string
  /**
   * 消息内容（展示的一小部分）
   */
  content: string
  /**
   * 消息详情内容（json格式字符串）
   */
  detailContent: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 消息key
   */
  messageKey: string
  /**
   * 业务id
   */
  businessId: string
  /**
   * 是否已读（0=未读 1=已读）
   */
  isRead: YesNoType
  /**
   * 已读时间
   */
  readTime: string
}

export interface MessageCenterContentQuery extends BaseQuery {
  /**
   * 接收消息的用户id
   */
  receiveId: string
  /**
   * 消息内容（展示的一小部分）
   */
  content: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 消息key
   */
  messageKey: string
  messageKeyList: string[]
  /**
   * 业务id
   */
  businessId: string
  /**
   * 是否已读（0=未读 1=已读）
   */
  isRead: YesNoType
}

export interface MessageCenterContentDto extends BaseDto {
  /**
   * 接收消息的用户id
   */
  receiveId: string
  /**
   * 消息内容（展示的一小部分）
   */
  content: string
  /**
   * 消息详情内容（json格式字符串）
   */
  detailContent: string
  /**
   * 分组key
   */
  groupKey: string
  /**
   * 消息key
   */
  messageKey: string
  /**
   * 业务id
   */
  businessId: string
  /**
   * 是否已读（0=未读 1=已读）
   */
  isRead: YesNoType
  /**
   * 已读时间
   */
  readTime: string
}
