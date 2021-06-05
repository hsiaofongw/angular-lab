import { RatingBarModule } from './../../public-components/rating-bar/rating-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent
  ],
  exports: [ IndexComponent],
  imports: [
    CommonModule,
    RatingBarModule,
  ]
})
export class RatingBarDemoModule { }
