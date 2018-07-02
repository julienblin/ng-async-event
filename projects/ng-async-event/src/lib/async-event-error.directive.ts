import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

/**
 * Renders a template when the IAsyncEvent state is 'error'.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventError]'
})
export class AsyncEventErrorDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
