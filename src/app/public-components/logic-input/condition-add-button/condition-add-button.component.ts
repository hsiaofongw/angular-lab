import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-condition-add-button',
  templateUrl: './condition-add-button.component.html',
  styleUrls: ['./condition-add-button.component.less']
})
export class ConditionAddButtonComponent implements OnInit {

  @Output()
  onCreateCondition = new EventEmitter();

  @Output()
  onCreateConditionsGroup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCreateConditionsGroup() {
    this.onCreateConditionsGroup.emit();
  }

  handleCreateCondition() {
    this.onCreateCondition.emit();
  }

}
