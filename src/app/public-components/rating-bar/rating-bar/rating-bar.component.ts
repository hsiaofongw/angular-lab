import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type RateForm = { rate: string };
type RateRange = 0 | 1 | 2 | 3 | 4 | 5;

/** 打分栏组件 */
@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.less']
})
export class RatingBarComponent implements OnInit {

  rate: 0 | 1 | 2 | 3 | 4 | 5 = 0;

  rateForm = new FormGroup({
    rate: new FormControl(),
  });

  isEditable = true;

  constructor(

  ) { }

  ngOnInit(): void {
    this.rateForm.valueChanges.subscribe((data: RateForm) => {
      let rateNum = 0;

      if (data.rate && data.rate.length) {
        rateNum = parseInt(data.rate, 10);
      }

      this.rate = rateNum as RateRange;
    });
  }

  array(rate: number): number[] {
    const emptyArray = new Array(rate);
    return emptyArray;
  }

  mouseOverStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = (starIdx + 1) as RateRange;
  }

  mouseOutStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = 0;
  }

  setStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = (starIdx + 1) as RateRange;
    this.isEditable = false;
  }

  reset(): void {
    this.rate = 0;
    this.isEditable = true;
  }

}
