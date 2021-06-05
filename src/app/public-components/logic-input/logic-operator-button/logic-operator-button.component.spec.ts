import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicOperatorButtonComponent } from './logic-operator-button.component';

describe('LogicOperatorButtonComponent', () => {
  let component: LogicOperatorButtonComponent;
  let fixture: ComponentFixture<LogicOperatorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicOperatorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicOperatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
