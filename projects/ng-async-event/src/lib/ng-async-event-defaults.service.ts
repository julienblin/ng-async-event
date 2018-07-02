import { Injectable, TemplateRef } from '@angular/core';
import { AsyncEventTemplateContext } from './async-event-template-context';

export type TemplateName = 'init' | 'processed' | 'processing' | 'error';

/**
 * Service that stores defaults templates, grouped by setNames.
 */
@Injectable()
export class NgAsyncEventDefaultsService {

  private _defaultsSets: IDefaultsSets = {};

  /**
   * Gets a {TemplateRef} if any.
   * @param setName - the name of the set.
   * @param templateName - the name of the template.
   */
  getTemplateRef(setName: string, templateName: TemplateName) {
    return this._defaultsSets[setName] && this._defaultsSets[setName][templateName];
  }

  /**
   * Sets a {TemplateRef}
   * @param setName - the name of the set.
   * @param templateName - the name of the template.
   * @param templateRef - the {TemplateRef] to set.
   */
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
