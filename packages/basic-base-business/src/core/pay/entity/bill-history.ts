import type { BaseVo } from '../../../base'

/**
 * 交易类型（wechat、alipay、balance...）
 */
export type BillTradeType = 'wechat' | 'alipay' | 'balance'
/**
 * 流水类型（1=收入 2=支出 3=退款）
 */
export type BillPayType = 1 | 2 | 3

export interface BillHistoryVo extends BaseVo {

  /**
   * 用户id
   */
  userId: string
  /**
   * 交易类型（wechat、alipay、balance...）
   */
  tradeType: BillTradeType
  /**
   * 流水类型（1=收入 2=支出 3=退款）
   */
  type: BillPayType
  /**
   * 商户单号
   */
  outTradeNo: string
  /**
   * 商户退款单号
   */
  outRefundNo: string
  /**
   * 订单标题
   */
  subject: string
  /**
   * 订单附加信息
   */
  body: string
  /**
   * 订单总金额，单位为分
   */
  totalAmount: number
  /**
   * 退款金额，单位为分
   */
  refundAmount: number
  /**
   * 订单超时时间
   */
  expireTime: string
  /**
   * 订单状态（1=新建 2=完成 4=订单关闭 5=超时取消 6=已退款（全额） 7=已退款（部分）
   */
  status: number
  /**
   * 交易时间
   */
  tradeTime: string
  /**
   * 通知数据
   */
  notifyData: string

}
