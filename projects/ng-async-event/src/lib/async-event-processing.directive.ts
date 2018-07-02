import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

/**
 * Renders a template when the IAsyncEvent state is 'processing'.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventProcessing]'
})
export class AsyncEventProcessingDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
