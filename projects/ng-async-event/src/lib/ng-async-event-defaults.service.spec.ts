import { TestBed, inject } from '@angular/core/testing';

import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';
import { TemplateRef, EmbeddedViewRef } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

class MockTemplateRef extends TemplateRef<AsyncEventTemplateContext> {
  elementRef;

  public createEmbeddedView(context: AsyncEventTemplateContext): EmbeddedViewRef<AsyncEventTemplateContext> {
    throw new Error('Not implemented');
  }
}

describe('NgAsyncEventDefaultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAsyncEventDefaultsService]
    });
  });

  it('should be created', inject([NgAsyncEventDefaultsService], (service: NgAsyncEventDefaultsService) => {
    expect(service).toBeTruthy();
  }));

  it('should store default templateRef', inject([NgAsyncEventDefaultsService], (service: NgAsyncEventDefaultsService) => {
    const templateRef = new MockTemplateRef();
    service.setTemplateRef('', 'init', templateRef);
    const result = service.getTemplateRef('', 'init');

    expect(result).toBe(templateRef);
  }));

  it('should store named set templateRef', inject([NgAsyncEventDefaultsService], (service: NgAsyncEventDefaultsService) => {
    const templateRef = new MockTemplateRef();
    service.setTemplateRef('myset', 'error', templateRef);
    const result = service.getTemplateRef('myset', 'error');

    expect(result).toBe(templateRef);
    expect(service.getTemplateRef('', 'error')).toBeFalsy();
  }));
});
