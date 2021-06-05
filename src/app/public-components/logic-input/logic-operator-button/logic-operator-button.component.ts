import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

type LogicOperator = 'and' | 'or';

@Component({
  selector: 'app-logic-operator-button',
  templateUrl: './logic-operator-button.component.html',
  styleUrls: ['./logic-operator-button.component.less']
})
export class LogicOperatorButtonComponent implements OnInit {

  /** 是否处在可编辑状态 */
  isEditable = true;

  /** 当前显示的逻辑操作符 */
  currentLogicOperator: LogicOperator = 'and';

  /** 输入的逻辑操作符 */
  @Input()
  inputLogicOperator?: LogicOperator;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(_: SimpleChanges) {
    if (this.inputLogicOperator) {
      if (this.inputLogicOperator === 'and' || this.inputLogicOperator === 'or') {
        this.currentLogicOperator = this.inputLogicOperator;
      }
    }
  }

  /** 取得逻辑操作符对应汉字 */
  getLogicOperatorText(logicOperator: LogicOperator) {
    if (logicOperator === 'and') {
      return 'AND';
    }
    else if (logicOperator === 'or') {
      return 'OR';
    }
    else {
      return '';
    }
  }

  /** 处理点击操作事件 */
  handleClick() {
    if (this.currentLogicOperator === 'and') {
      this.currentLogicOperator = 'or';
    }
    else if (this.currentLogicOperator === 'or') {
      this.currentLogicOperator = 'and';
    }
  }

}
