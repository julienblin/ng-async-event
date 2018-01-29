import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncEventComponent } from './async-event.component';
import { AsyncEventInitDirective } from './async-event-init.directive';
import { AsyncEventProcessingDirective } from './async-event-processing.directive';
import { AsyncEventProcessedDirective } from './async-event-processed.directive';
import { AsyncEventErrorDirective } from './async-event-error.directive';
import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';
import { AsyncEventDefaultsComponent } from './async-event-defaults.component';

/**
 * The module for ng-async-event that includes all components, services and directives.
 * @example
 * @NgModule({
 *  ...
 *  imports: [
 *  ...,
 *  NgAsyncEventModule
 * ]
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncEventComponent,
    AsyncEventDefaultsComponent,
    AsyncEventInitDirective,
    AsyncEventProcessingDirective,
    AsyncEventProcessedDirective,
    AsyncEventErrorDirective,
  ],
  exports: [
    AsyncEventComponent,
    AsyncEventDefaultsComponent,
    AsyncEventInitDirective,
    AsyncEventProcessingDirective,
    AsyncEventProcessedDirective,
    AsyncEventErrorDirective,
  ],
  providers: [
    NgAsyncEventDefaultsService
  ]
})
export class NgAsyncEventModule { }
