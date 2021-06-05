import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAddButtonComponent } from './condition-add-button.component';

describe('ConditionAddButtonComponent', () => {
  let component: ConditionAddButtonComponent;
  let fixture: ComponentFixture<ConditionAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
