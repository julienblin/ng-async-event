import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { IAsyncEvent } from 'rx-async-event';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventProcessing]'
})
export class AsyncEventProcessingDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<IAsyncEvent>;

}
