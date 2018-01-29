import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEventInit]'
})
export class AsyncEventInitDirective {

  @ContentChild(TemplateRef) templateRef?: TemplateRef<AsyncEventTemplateContext>;

}
