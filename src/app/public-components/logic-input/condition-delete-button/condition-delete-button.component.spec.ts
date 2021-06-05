import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDeleteButtonComponent } from './condition-delete-button.component';

describe('ConditionDeleteButtonComponent', () => {
  let component: ConditionDeleteButtonComponent;
  let fixture: ComponentFixture<ConditionDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
