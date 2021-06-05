export type LogicNodeOperator = 'identity' | 'and' | 'or';

/**
 * 逻辑树的一个节点，T1 是条件，T2 节点类型
 */
export interface ILogicNode<T1, T2 extends LogicNodeOperator> {

  /** 节点的唯一标识符 */
  id: string;

  /**
   * 节点的状态：
   * 'online' -> 显示
   * 'unplugged' -> 下线
   */
  status: 'online' | 'unplugged';

  /**
   * 操作符，目前支持：
   * 'identity' -> 恒等
   * 'and' -> 与
   * 'or' -> 或
   */
  operator: T2;

  conditions: T2 extends 'identity' ? T1 : Array<ILogicNode<T1, LogicNodeOperator>>;
}

/**
 * 多字段类型的条件，例如：
 * {
 *   'position': 'software engineer',
 *   'weeSalary': 10000,
 * }
 */
export interface IFieldCondition {
  [key: string]: string | number | Array<string> | boolean;
}
