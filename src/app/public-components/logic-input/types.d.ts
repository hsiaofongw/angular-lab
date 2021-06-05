type LogicNodeOperator = 'identity' | 'and' | 'or';

interface ILogicNode<T1, T2 extends LogicNodeOperator> {

  /**
   * 操作符，目前支持：
   * 'identity' -> 恒等
   * 'and' -> 与
   * 'or' -> 或
   */
  operator: T2;

  /**
   * 子节点列表，通过儿子的数量来判断此节点是分支还是叶子
   */
  childNodes: Array<ILogicNode<T1, LogicNodeOperator>>;

  /** 条件 */
  condition: T2 extends 'identity' ? T1 : never;
}
