import { IAsyncEvent } from 'rx-async-event';
import { AsyncEventState } from 'rx-async-event/dist/lib/async-event';

/**
 * The {TemplateRef} context passed to <ng-template> when rendering.
 */
export class AsyncEventTemplateContext {

  /** The $implicit is set to the full IAsyncEvent. */
  public readonly $implicit: IAsyncEvent;
  /** The IAsyncEvent argument, if any. */
  public readonly argument: any;
  /** The IAsyncEvent error, if any. */
  public readonly error: Error;
  /** The IAsyncEvent result, if any. */
  public readonly result: any;
  /** The IAsyncEvent state, if any. */
  public readonly state: AsyncEventState;

  constructor(asyncEvent: IAsyncEvent) {
    this.$implicit = asyncEvent;
    this.argument = asyncEvent.argument;
    this.error = asyncEvent.error;
    this.result = asyncEvent.result;
    this.state = asyncEvent.state;
  }
}
