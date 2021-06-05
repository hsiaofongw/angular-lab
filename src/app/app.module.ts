import { LogicInputModule } from './public-components/logic-input/logic-input.module';
import { RatingBarModule } from './public-components/rating-bar/rating-bar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingBarModule,
    LogicInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
