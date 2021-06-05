import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicConditionComponent } from './logic-condition.component';

describe('LogicConditionComponent', () => {
  let component: LogicConditionComponent;
  let fixture: ComponentFixture<LogicConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
