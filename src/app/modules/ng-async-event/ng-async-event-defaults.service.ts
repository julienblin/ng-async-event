import { Injectable, TemplateRef } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

export type TemplateName = 'init' | 'processed' | 'processing' | 'error';

@Injectable()
export class NgAsyncEventDefaultsService {

  private _defaultsSets: IDefaultsSets = {};

  getTemplateRef(setName: string, templateName: TemplateName) {
    return this._defaultsSets[setName] && this._defaultsSets[setName][templateName];
  }

  setTemplateRef(setName: string, templateName: TemplateName, templateRef: TemplateRef<AsyncEventTemplateContext>) {
    if (!this._defaultsSets[setName]) {
      this._defaultsSets[setName] = {};
    }

    this._defaultsSets[setName][templateName] = templateRef;
  }
}

interface IDefaultsSets {
  [setName: string]: {
    [templateName: string]: TemplateRef<AsyncEventTemplateContext>;
  };
}
