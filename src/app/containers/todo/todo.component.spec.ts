import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoComponent} from './todo.component';
import {TodoService} from "../../services/todo.service";
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {TodoListComponent} from "../../presentationals/todo-list/todo-list.component";
import {TodoHeaderComponent} from "../../presentationals/todo-header/todo-header.component";
import {TodoFormComponent} from "../../presentationals/todo-form/todo-form.component";
import {MockComponent, MockProvider} from "ng-mocks";
import {signal} from "@angular/core";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        provideNoopAnimations(),
        MockProvider(TodoService, {
          count: signal(0),
          doneCount: signal(0),
          openCount: signal(0),
          sortedTodos: signal([])
        })
      ]
    })
      .overrideComponent(TodoComponent, {
        remove: { imports: [TodoListComponent, TodoHeaderComponent, TodoFormComponent] },
        add: { imports: [MockComponent(TodoListComponent), MockComponent(TodoHeaderComponent), MockComponent(TodoFormComponent)] },
      })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
