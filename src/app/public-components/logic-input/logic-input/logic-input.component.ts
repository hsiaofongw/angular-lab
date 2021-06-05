import { Component, Input, OnInit } from '@angular/core';
import { ILogicNode, LogicNodeOperator } from '../interfaces';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }
];

@Component({
  selector: 'app-logic-input',
  templateUrl: './logic-input.component.html',
  styleUrls: ['./logic-input.component.less']
})
export class LogicInputComponent implements OnInit {

  treeControl = new NestedTreeControl<TreeNode> (node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  @Input()
  conditionTree?: ILogicNode<unknown, LogicNodeOperator>;

  constructor() { }

  ngOnInit(): void {
  }

}
