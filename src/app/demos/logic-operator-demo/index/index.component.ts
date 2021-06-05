import { IFieldCondition } from 'src/app/public-components/logic-input/interfaces';
import { Component, OnInit } from '@angular/core';
import { LogicNodeOperator, ILogicNode } from 'src/app/public-components/logic-input/interfaces';

const exampleTreeData: ILogicNode<IFieldCondition, 'and'> = {
  operator: 'and',
  conditions: [
    {
      operator: 'identity',
      conditions: {
        'f1': 1,
        'f2': 2,
      },
    },
    {
      operator: 'identity',
      conditions: {
        'f1': 1,
        'f2': 2,
      },
    },
    {
      operator: 'or',
      conditions: [
        {
          operator: 'identity',
          conditions: {
            'f1': 1,
            'f2': 2,
          },
        },
        {
          operator: 'identity',
          conditions: {
            'f1': 1,
            'f2': 2,
          },
        },
      ]
    }
  ]
}

@Component({
  selector: 'demo-logic-input',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  treeData = exampleTreeData;

  constructor() { }

  ngOnInit(): void {
  }

}
