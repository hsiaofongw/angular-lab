import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionInfoDemoComponent } from './version-info-demo.component';

describe('VersionInfoDemoComponent', () => {
  let component: VersionInfoDemoComponent;
  let fixture: ComponentFixture<VersionInfoDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionInfoDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionInfoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
