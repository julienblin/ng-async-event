import { IAsyncEvent } from 'rx-async-event';
import { AsyncEventState } from 'rx-async-event/dist/lib/async-event';

export class AsyncEventTemplateContext {

  public readonly $implicit: IAsyncEvent;
  public readonly argument: any;
  public readonly error: Error;
  public readonly result: any;
  public readonly state: AsyncEventState;

  constructor(asyncEvent: IAsyncEvent) {
    this.$implicit = asyncEvent;
    this.argument = asyncEvent.argument;
    this.error = asyncEvent.error;
    this.result = asyncEvent.result;
    this.state = asyncEvent.state;
  }
}
