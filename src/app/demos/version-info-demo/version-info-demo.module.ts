import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionInfoDemoComponent } from './version-info-demo/version-info-demo.component';

@NgModule({
  declarations: [
    VersionInfoDemoComponent
  ],
  exports: [VersionInfoDemoComponent],
  imports: [
    CommonModule
  ]
})
export class VersionInfoDemoModule { }
