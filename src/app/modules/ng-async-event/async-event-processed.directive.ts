import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventProcessed]'
})
export class AsyncEventProcessedDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
