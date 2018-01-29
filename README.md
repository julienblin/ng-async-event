# ng-async-event

Angular UI component that simplifies usage of [rx-async-event](https://github.com/julienblin/rx-async-event).

[![Travis](https://travis-ci.org/julienblin/ng-async-event.svg?branch=master)](https://travis-ci.org/julienblin/ng-async-event)
[![npm](https://img.shields.io/npm/v/ng-async-event.svg)](https://www.npmjs.com/package/ng-async-event)
[![bitHound Dependencies](https://www.bithound.io/github/julienblin/ng-async-event/badges/dependencies.svg)](https://www.bithound.io/github/julienblin/ng-async-event/master/dependencies/npm)

## Objectives

This library is a complement to [rx-async-event](https://github.com/julienblin/rx-async-event) that allows the projection of
the state management in [rx-async-event](https://github.com/julienblin/rx-async-event) into dedicated, re-usable templates.

## How to use

### Installation

```shell
npm i --save ng-async-event
```

### Import the NgAsyncEventModule in the main app module

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAsyncEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Service

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncEventObservable, AsyncEventSubject } from 'rx-async-event';
import { Post } from './post';

@Injectable()
export class AppService {

  private readonly _postEvent$ = new AsyncEventSubject<number, Post>();

  constructor(private http: HttpClient) { }

  get postEvent$(): AsyncEventObservable<number, Post> {
    return this._postEvent$.asObservable();
  }

  /**
   * Example of managing the life cycle of an HttpClient Observable.
   */
  loadPost(id: number) {
    return this._postEvent$.observe(
      id,
      this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`));
  }

  /**
   * This example manages the life cycle of a Promise instead.
   */
  loadPostAsPromise(id: number) {
    return this._postEvent$.execute(
      id,
      (arg) => this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).toPromise());
  }


}
```

### Component

```typescript
import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Post } from './post';
import { AsyncEventObservable } from 'rx-async-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent {

  postEvent$: AsyncEventObservable<number, Post>;

  constructor(private appService: AppService) {
    this.postEvent$ = this.appService.postEvent$;
  }

  loadPost(id: number) {
    this.appService.loadPost(id);
  }
}
```

### View

```html
<async-event [asyncEvent]="postEvent$ | async">

  <div *asyncEventProcessing="let postId=argument">
    Processing post id {{ postId }}...
  </div>

  <div *asyncEventProcessed="let post=result">
    Post title: {{ post.title }}
  </div>

</async-event>
```

## Default templates

It is also possible to define default templates that will be used if no local template is defined.

In the `app.component.html` file, define them using `<async-event-defaults>`:

```html
<async-event-defaults>
  <div *asyncEventProcessing>
    <img src="spinner.gif">
  </div>

  <div *asyncEventProcessed="let result=result">
    {{ result }}
  </div>

  <div *asyncEventError="let error=error">
    {{ error }}
  </div>
</async-event-defaults>
```

and then later:

```html
<async-event [asyncEvent]="postEvent$ | async">
  <!-- Default templates will be used  -->
</async-event>
```

It is also possible to create alternate defaults set using the `setName` input:

```html
<async-event-defaults setName="debug">
  <div *asyncEventProcessing="let argument=argument">
    Loading {{ argument }}...
  </div>

  <div *asyncEventProcessed="let result=result">
    {{ result | json }}
  </div>

  <div *asyncEventError="let error=error">
    {{ error }}
    <code *ngIf="error.stack">
      {{ error.stack }}
    </code>
  </div>
</async-event-defaults>
```

and then later reference the `setName` in `<async-event>`:

```html
<async-event [asyncEvent]="postEvent$ | async" setName="debug">
  <!-- Default templates for "debug" will be used -->
</async-event>
```

## Template context

The context is passed to templates using [Angular Microsyntax](https://angular.io/guide/structural-directives#microsyntax).

Please see [async-event-template-context.ts](src/app/modules/ng-async-event/async-event-template-context.ts) for the complete object.
