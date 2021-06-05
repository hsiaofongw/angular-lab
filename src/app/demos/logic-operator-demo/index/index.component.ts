import { IFieldCondition } from 'src/app/public-components/logic-input/interfaces';
import { Component, OnInit } from '@angular/core';
import { LogicNodeOperator, ILogicNode } from 'src/app/public-components/logic-input/interfaces';

const exampleTreeData: ILogicNode<IFieldCondition, 'and'> = {
  id: 'root',
  operator: 'and',
  status: 'online',
  conditions: [
    {
      id: '1',
      operator: 'identity',
      conditions: {
        'f1': 1,
        'f2': 2,
      },
      status: 'online',
    },
    {
      id: '2',
      operator: 'identity',
      conditions: {
        'f1': 1,
        'f2': 2,
      },
      status: 'online',
    },
    {
      id: 'b1',
      operator: 'or',
      conditions: [
        {
          id: 'b1-1',
          operator: 'identity',
          conditions: {
            'f1': 1,
            'f2': 2,
          },
          status: 'online',
        },
        {
          id: 'b1-2',
          operator: 'identity',
          conditions: {
            'f1': 1,
            'f2': 2,
          },
          status: 'online',
        },
      ],
      status: 'online'
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
