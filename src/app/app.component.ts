import { Component, OnInit } from '@angular/core';
import { AsyncEventObservable, AsyncEventSubject } from 'rx-async-event';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  testEvent$: AsyncEventObservable<void, string>;
  errorEvent$: AsyncEventObservable<void, string>;

  ngOnInit() {
    this.testEvent$ = AsyncEventSubject.execute<void, string>(
      undefined,
      async () => {
        await delay(2000);

        return 'This is the result.';
      })
      .asObservable();

    this.errorEvent$ = AsyncEventSubject.execute<void, string>(
      undefined,
      async () => {
        await delay(2000);

        throw new Error('This is a caught error');
      })
      .asObservable();
    }
}
