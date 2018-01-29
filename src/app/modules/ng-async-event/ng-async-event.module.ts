import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncEventComponent } from './async-event.component';
import { AsyncEventInitDirective } from './async-event-init.directive';
import { AsyncEventProcessingDirective } from './async-event-processing.directive';
import { AsyncEventProcessedDirective } from './async-event-processed.directive';
import { AsyncEventErrorDirective } from './async-event-error.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncEventComponent,
    AsyncEventInitDirective,
    AsyncEventProcessingDirective,
    AsyncEventProcessedDirective,
    AsyncEventErrorDirective,
  ],
  exports: [
    AsyncEventComponent,
    AsyncEventInitDirective,
    AsyncEventProcessingDirective,
    AsyncEventProcessedDirective,
    AsyncEventErrorDirective,
  ]
})
export class NgAsyncEventModule { }
