import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncEventComponent } from './async-event.component';
import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';

describe('AsyncEventComponent', () => {
  let component: AsyncEventComponent;
  let fixture: ComponentFixture<AsyncEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NgAsyncEventDefaultsService,
      ],
      declarations: [ AsyncEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
