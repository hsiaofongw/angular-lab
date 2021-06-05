import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-condition-delete-button',
  templateUrl: './condition-delete-button.component.html',
  styleUrls: ['./condition-delete-button.component.less']
})
export class ConditionDeleteButtonComponent implements OnInit {

  @Output()
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.onClick.emit();
  }

}
