import { LogicInputModule } from './../../public-components/logic-input/logic-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent
  ],
  exports: [ IndexComponent ],
  imports: [
    CommonModule,
    LogicInputModule,
  ]
})
export class LogicOperatorDemoModule { }
