import { LogicOperatorDemoModule } from './demos/logic-operator-demo/logic-operator-demo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingBarDemoModule } from './demos/rating-bar-demo/rating-bar-demo.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
