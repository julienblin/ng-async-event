import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgAsyncEventModule } from './modules/ng-async-event/ng-async-event.module';


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
