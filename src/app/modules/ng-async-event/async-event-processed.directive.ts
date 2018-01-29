import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

/**
 * Renders a template when the IAsyncEvent state is 'processed'.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventProcessed]'
})
export class AsyncEventProcessedDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
