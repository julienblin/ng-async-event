import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { IAsyncEvent } from 'rx-async-event';
import { AsyncEventInitDirective } from './async-event-init.directive';
import { AsyncEventProcessingDirective } from './async-event-processing.directive';
import { AsyncEventProcessedDirective } from './async-event-processed.directive';
import { AsyncEventErrorDirective } from './async-event-error.directive';
import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';
import { AsyncEventTemplateContext } from './async-event-template-context';

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

  constructor(private _defaultsService: NgAsyncEventDefaultsService) {}

  get initTemplateRef(): TemplateRef<AsyncEventTemplateContext> {
    return this.asyncEventInitDirective && this.asyncEventInitDirective.templateRef
      ? this.asyncEventInitDirective.templateRef
      : this._defaultsService.initTemplateRef;
  }

  get processingTemplateRef(): TemplateRef<AsyncEventTemplateContext> {
    return this.asyncEventProcessingDirective && this.asyncEventProcessingDirective.templateRef
      ? this.asyncEventProcessingDirective.templateRef
      : this._defaultsService.processingTemplateRef;
  }

  get processedTemplateRef(): TemplateRef<AsyncEventTemplateContext> {
    return this.asyncEventProcessedDirective && this.asyncEventProcessedDirective.templateRef
      ? this.asyncEventProcessedDirective.templateRef
      : this._defaultsService.processedTemplateRef;
  }

  get errorTemplateRef(): TemplateRef<AsyncEventTemplateContext> {
    return this.asyncEventErrorDirective && this.asyncEventErrorDirective.templateRef
      ? this.asyncEventErrorDirective.templateRef
      : this._defaultsService.errorTemplateRef;
  }

  get templateOutletContext() {
    return new AsyncEventTemplateContext(this.asyncEvent);
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
