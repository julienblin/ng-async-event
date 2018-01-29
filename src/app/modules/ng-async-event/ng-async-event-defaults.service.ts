import { Injectable, TemplateRef } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

@Injectable()
export class NgAsyncEventDefaultsService {

  private _initTemplateRef: TemplateRef<AsyncEventTemplateContext>;
  private _processingTemplateRef: TemplateRef<AsyncEventTemplateContext>;
  private _processedTemplateRef: TemplateRef<AsyncEventTemplateContext>;
  private _errorTemplateRef: TemplateRef<AsyncEventTemplateContext>;

  get initTemplateRef() {
    return this._initTemplateRef;
  }

  set initTemplateRef(templateRef: TemplateRef<AsyncEventTemplateContext>) {
    this._initTemplateRef = templateRef;
  }

  get processingTemplateRef() {
    return this._processingTemplateRef;
  }

  set processingTemplateRef(templateRef: TemplateRef<AsyncEventTemplateContext>) {
    this._processingTemplateRef = templateRef;
  }

  get processedTemplateRef() {
    return this._processedTemplateRef;
  }

  set processedTemplateRef(templateRef: TemplateRef<AsyncEventTemplateContext>) {
    this._processedTemplateRef = templateRef;
  }

  get errorTemplateRef() {
    return this._errorTemplateRef;
  }

  set errorTemplateRef(templateRef: TemplateRef<AsyncEventTemplateContext>) {
    this._errorTemplateRef = templateRef;
  }
}
