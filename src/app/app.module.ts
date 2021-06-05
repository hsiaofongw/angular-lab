import { VersionInfoDemoModule } from './demos/version-info-demo/version-info-demo.module';
import { LogicOperatorDemoModule } from './demos/logic-operator-demo/logic-operator-demo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingBarDemoModule } from './demos/rating-bar-demo/rating-bar-demo.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LogicOperatorDemoModule,
    RatingBarDemoModule,
    VersionInfoDemoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
