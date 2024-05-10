export interface ItemCountModel {
  /**
   * 名称
   */
  name: string
  /**
   * 数量
   */
  count: number
}

export interface ChildrenItemModel<ITEM_TYPE, CHILD_TYPE> {
  /**
   * 项目内容
   */
  item: ITEM_TYPE
  /**
   * 子节点
   */
  children: CHILD_TYPE[]
}

export interface StatsModel {
  /**
   * x轴
   */
  x: string[]
  /**
   * y轴
   */
  y: {
    name: string
    data: number[]
  }[]
}
