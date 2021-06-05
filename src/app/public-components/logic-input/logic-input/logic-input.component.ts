import { LogicNodeOperator, ILogicNode } from 'src/app/public-components/logic-input/interfaces';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import { v4 as uuidv4 } from 'uuid';

type BranchLogicNode = ILogicNode<unknown, LogicNodeOperator>;

@Component({
  selector: 'app-logic-input',
  templateUrl: './logic-input.component.html',
  styleUrls: ['./logic-input.component.less']
})
export class LogicInputComponent implements OnInit {

  treeControl = new NestedTreeControl<BranchLogicNode>(node => (node.conditions as Array<BranchLogicNode>));
  dataSource = new ArrayDataSource([] as BranchLogicNode[]);

  hasChild = (_: number, node: BranchLogicNode) => node.operator !== 'identity';
  // isOnline = (_: number, node: BranchLogicNode) => node.status === 'online';

  @Input()
  conditionTree?: ILogicNode<unknown, LogicNodeOperator>;

  constructor() { }

  ngOnInit(): void {
    // window.setInterval(() => window.console.log(this.conditionTree), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.conditionTree) {
      const nodes = [this.conditionTree];
      this.dataSource = new ArrayDataSource(nodes);
    }
  }

  /** 响应节点删除事件 */
  handleDelete(node: BranchLogicNode): void {
    node.status = 'unplugged';
    this.dataSource = new ArrayDataSource([this.cleanUnPlugged(this.conditionTree as BranchLogicNode)]);
    this.dataSource = this.dataSource;
  }

  /** 进行更新操作 */
  updatingEveryNode(node: BranchLogicNode): BranchLogicNode {
    if (node.operator !== 'identity') {
      if (node.status === 'updating') {
        node.status = 'online';
      }
      let subNodes = node.conditions as Array<BranchLogicNode>;
      subNodes = subNodes.map(n => this.updatingEveryNode(n));
      node.conditions = subNodes;
    }

    return {
      id: node.id,
      conditions: node.conditions,
      status: node.status,
      operator: node.operator,
    };
  }

  /** 清除掉所有已经被标记为「删除」的节点 */
  cleanUnPlugged(node: BranchLogicNode): BranchLogicNode {
    if (node.operator !== 'identity') {
      let subNodes = node.conditions as Array<BranchLogicNode>;
      subNodes = subNodes.filter(n => n.status !== 'unplugged');
      subNodes = subNodes.map(n => this.cleanUnPlugged(n));
      subNodes = subNodes.filter(n => {
        if (n.operator === 'identity') {
          return true;
        }
        else if ((n.conditions as Array<BranchLogicNode>).length > 0) {
          return true;
        }
        else {
          return false;
        }
      });
      node.conditions = subNodes;
    }

    return {
      id: node.id,
      conditions: node.conditions,
      status: node.status,
      operator: node.operator
    };
  }

  handleCreateCondition(node: BranchLogicNode) {
    if (node.operator !== 'identity') {

      let subNodes = node.conditions as BranchLogicNode[];
      subNodes.push({id: uuidv4(), operator: 'identity', conditions: {}, status: 'online'});
      node.conditions = subNodes;
    }

    this.dataSource = new ArrayDataSource(
      [
        this.updatingEveryNode(this.conditionTree as BranchLogicNode)
      ]
    );
  }

  handleCreateConditionsGroup(node: BranchLogicNode) {

    if (node.operator !== 'identity') {

      let subNodes = node.conditions as BranchLogicNode[];
      subNodes.push(
        {
          id: uuidv4(),
          operator: 'and',
          conditions: [
            {id: uuidv4(), operator: 'identity', conditions: {}, status: 'online'}
          ],
          status: 'online'
        }
      );
      node.conditions = subNodes;

    }

    this.dataSource = new ArrayDataSource(
      [
        this.updatingEveryNode(this.conditionTree as BranchLogicNode)
      ]
    );
  }
}
