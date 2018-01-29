import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { IAsyncEvent } from 'rx-async-event';
import { AsyncEventInitDirective } from './async-event-init.directive';
import { AsyncEventProcessingDirective } from './async-event-processing.directive';
import { AsyncEventProcessedDirective } from './async-event-processed.directive';
import { AsyncEventErrorDirective } from './async-event-error.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'async-event',
  templateUrl: './async-event.component.html',
})
export class AsyncEventComponent {

  /** The async event */
  @Input() asyncEvent: IAsyncEvent;

  /** Content children directive querying. */
  @ContentChild(AsyncEventInitDirective) asyncEventInitDirective?: AsyncEventInitDirective;
  @ContentChild(AsyncEventProcessingDirective) asyncEventProcessingDirective?: AsyncEventProcessingDirective;
  @ContentChild(AsyncEventProcessedDirective) asyncEventProcessedDirective?: AsyncEventProcessedDirective;
  @ContentChild(AsyncEventErrorDirective) asyncEventErrorDirective?: AsyncEventErrorDirective;

  get initTemplateRef(): TemplateRef<IAsyncEvent> {
    return this.asyncEventInitDirective && this.asyncEventInitDirective.templateRef;
  }

  get processingTemplateRef(): TemplateRef<IAsyncEvent> {
    return this.asyncEventProcessingDirective && this.asyncEventProcessingDirective.templateRef;
  }

  get processedTemplateRef(): TemplateRef<IAsyncEvent> {
    return this.asyncEventProcessedDirective && this.asyncEventProcessedDirective.templateRef;
  }

  get errorTemplateRef(): TemplateRef<IAsyncEvent> {
    return this.asyncEventErrorDirective && this.asyncEventErrorDirective.templateRef;
  }

  get templateOutletContext() {
    return ({
      $implicit: this.asyncEvent,
      argument: this.asyncEvent && this.asyncEvent.argument,
      error: this.asyncEvent && this.asyncEvent.error,
      result: this.asyncEvent && this.asyncEvent.result,
      state: this.asyncEvent && this.asyncEvent.state,
    });
  }

  get renderInit() {
    return this.asyncEvent.isInit && this.initTemplateRef;
  }

  get renderProcessing() {
    return this.asyncEvent.isProcessing && this.processingTemplateRef;
  }

  get renderProcessed() {
    return this.asyncEvent.isProcessed;
  }

  get renderError() {
    return this.asyncEvent.isError;
  }
}
