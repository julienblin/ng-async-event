import { Component, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { AsyncEventInitDirective } from './async-event-init.directive';
import { AsyncEventProcessingDirective } from './async-event-processing.directive';
import { AsyncEventProcessedDirective } from './async-event-processed.directive';
import { AsyncEventErrorDirective } from './async-event-error.directive';
import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';
import { AsyncEventTemplateContext } from './async-event-template-context';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'async-event-defaults',
  template: '',
})
export class AsyncEventDefaultsComponent implements AfterContentInit {

  /** Content children directive querying. */
  @ContentChild(AsyncEventInitDirective) asyncEventInitDirective?: AsyncEventInitDirective;
  @ContentChild(AsyncEventProcessingDirective) asyncEventProcessingDirective?: AsyncEventProcessingDirective;
  @ContentChild(AsyncEventProcessedDirective) asyncEventProcessedDirective?: AsyncEventProcessedDirective;
  @ContentChild(AsyncEventErrorDirective) asyncEventErrorDirective?: AsyncEventErrorDirective;

  constructor(private _defaultsService: NgAsyncEventDefaultsService) {}

  ngAfterContentInit() {
    if (this.asyncEventInitDirective && this.asyncEventInitDirective.templateRef) {
      this._defaultsService.initTemplateRef = this.asyncEventInitDirective.templateRef;
    }

    if (this.asyncEventProcessingDirective && this.asyncEventProcessingDirective.templateRef) {
      this._defaultsService.processingTemplateRef = this.asyncEventProcessingDirective.templateRef;
    }

    if (this.asyncEventProcessedDirective && this.asyncEventProcessedDirective.templateRef) {
      this._defaultsService.processedTemplateRef = this.asyncEventProcessedDirective.templateRef;
    }

    if (this.asyncEventErrorDirective && this.asyncEventErrorDirective.templateRef) {
      this._defaultsService.errorTemplateRef = this.asyncEventErrorDirective.templateRef;
    }
  }
}
