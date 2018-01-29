import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

/**
 * Renders a template when the IAsyncEvent state is 'init'.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventInit]'
})
export class AsyncEventInitDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
