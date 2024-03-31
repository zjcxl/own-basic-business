export interface TreeNode<T> {

  /**
   * 项目内容
   */
  item: T
  /**
   * 子节点
   */
  children: Array<TreeNode<T>>

}
