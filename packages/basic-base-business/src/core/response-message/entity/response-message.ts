import type { BaseQuery } from '../../../base'

export interface ResponseMessageConfigAdvancedVo {

  /**
   * id
   */
  id: string

  /**
   * code
   */
  originCode: string

  /**
   * 默认的异常信息
   */
  message: string

  /**
   * 异常信息描述（不参与业务信息）
   */
  description: string

  /**
   * 新消息code
   */
  newCode: string

  /**
   * 新消息内容
   */
  newMessage: string

  /**
   * 更新时间
   */
  gmtModified: string

}

export interface ResponseMessageConfigQuery extends BaseQuery {
  /**
   * code
   */
  code: string

  /**
   * 消息内容
   */
  message: string
}

export interface ResponseMessageConfigForm {
  /**
   * 新消息code
   */
  newCode: string

  /**
   * 新消息内容
   */
  newMessage: string
}
