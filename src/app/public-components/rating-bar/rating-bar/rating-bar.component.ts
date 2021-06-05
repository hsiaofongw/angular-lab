import { Component, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** 打分范围 */
type RateRange = 0 | 1 | 2 | 3 | 4 | 5;

/** 打分栏组件 */
@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingBarComponent),
      multi: true
    }
  ]
})
export class RatingBarComponent implements OnInit, ControlValueAccessor {

  /** 打分事件 */
  @Output()
  onRate = new EventEmitter<RateRange>();

  /** 清除打分事件 */
  @Output()
  onRateClear = new EventEmitter<RateRange>();

  /** 打分值，范围 1 到 5，0 表示未打分 */
  rate: RateRange = 0;

  /** 打分栏是否处在可点击（可打分）状态 */
  isEditable = true;

  /** 打分改变时调用的回调函数 */
  onChange = (rating: number) => {};

  /** 触碰回调 */
  onTouch = () => {};

  constructor() { }

  ngOnInit(): void { }

  /** 生成一个给定元素的数组的辅助函数 */
  array(rate: number): number[] {
    const emptyArray = new Array(rate);
    return emptyArray;
  }

  /** 当鼠标悬浮在星星上时触发 */
  mouseOverStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = (starIdx + 1) as RateRange;
  }

  /** 当鼠标从星星上面移走时触发 */
  mouseOutStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = 0;
  }

  /** 打分 */
  setStar(starIdx: number): void {
    if (!this.isEditable) {
      return;
    }

    this.rate = (starIdx + 1) as RateRange;
    this.onRate.emit(this.rate);
    this.onChange(this.rate);
    this.isEditable = false;
  }

  /** 重置打分 */
  reset(): void {
    this.rate = 0;
    this.onRateClear.emit(0);
    this.onChange(0);
    this.isEditable = true;
  }

  writeValue(rating: number) {
    this.rate = rating as RateRange;
    this.onChange(rating);
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

  setDisabledState() {
    this.isEditable = false;
  }
}
