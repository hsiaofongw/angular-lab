import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicInputComponent } from './logic-input/logic-input.component';
import { LogicOperatorButtonComponent } from './logic-operator-button/logic-operator-button.component';
import { LogicConditionComponent } from './logic-condition/logic-condition.component';
import { ConditionAddButtonComponent } from './condition-add-button/condition-add-button.component';
import { ConditionDeleteButtonComponent } from './condition-delete-button/condition-delete-button.component';
import { MatMenuModule } from '@angular/material/menu';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    LogicInputComponent,
    LogicOperatorButtonComponent,
    LogicConditionComponent,
    ConditionAddButtonComponent,
    ConditionDeleteButtonComponent,

  ],
  exports: [LogicInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CdkTreeModule,
  ]
})
export class LogicInputModule { }
