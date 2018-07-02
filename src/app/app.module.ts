import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAsyncEventModule } from 'ng-async-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAsyncEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
