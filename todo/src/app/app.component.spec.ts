import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TodoComponent} from "./containers/todo/todo.component";
import {MockComponent} from "ng-mocks";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).overrideComponent(AppComponent, {
      remove: { imports: [TodoComponent] },
      add: { imports: [MockComponent(TodoComponent)] }
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
