import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicInputComponent } from './logic-input.component';

describe('LogicInputComponent', () => {
  let component: LogicInputComponent;
  let fixture: ComponentFixture<LogicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
