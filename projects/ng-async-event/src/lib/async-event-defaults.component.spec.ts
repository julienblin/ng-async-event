import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncEventDefaultsComponent } from './async-event-defaults.component';
import { NgAsyncEventDefaultsService } from './ng-async-event-defaults.service';

describe('AsyncEventDefaultsComponent', () => {
  let component: AsyncEventDefaultsComponent;
  let fixture: ComponentFixture<AsyncEventDefaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NgAsyncEventDefaultsService,
      ],
      declarations: [ AsyncEventDefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncEventDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
