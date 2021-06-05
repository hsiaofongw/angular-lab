import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


/** 提供打分栏组件的模块 */
@NgModule({
  declarations: [
    RatingBarComponent
  ],
  exports: [
    RatingBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class RatingBarModule { }
