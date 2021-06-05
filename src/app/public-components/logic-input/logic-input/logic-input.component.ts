import { LogicNodeOperator, ILogicNode } from 'src/app/public-components/logic-input/interfaces';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {DataSource} from '@angular/cdk/collections';

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
    window.setInterval(() => window.console.log(this.conditionTree), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.conditionTree) {
      const nodes = [this.conditionTree];
      this.dataSource = new ArrayDataSource(nodes);
    }
  }

  handleDelete(node: BranchLogicNode): void {
    node.status = 'unplugged';
    this.dataSource = new ArrayDataSource([this.cleanUnPlugged(this.conditionTree as BranchLogicNode)]);
    this.dataSource = this.dataSource;
  }

  cleanUnPlugged(node: BranchLogicNode): BranchLogicNode {
    if (node.operator !== 'identity') {
      let subNodes = node.conditions as Array<BranchLogicNode>;
      subNodes = subNodes.filter(n => n.status === 'online');
      subNodes = subNodes.map(n => this.cleanUnPlugged(n));
      node.conditions = subNodes;
    }

    return {
      id: node.id,
      conditions: node.conditions,
      status: node.status,
      operator: node.operator
    };
  }

}
