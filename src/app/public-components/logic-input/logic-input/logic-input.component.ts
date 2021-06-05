import { LogicNodeOperator, ILogicNode } from 'src/app/public-components/logic-input/interfaces';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';

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

  @Input()
  conditionTree?: ILogicNode<unknown, LogicNodeOperator>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.conditionTree) {
      const nodes = [this.conditionTree];
      this.dataSource = new ArrayDataSource(nodes);
    }
  }

}
