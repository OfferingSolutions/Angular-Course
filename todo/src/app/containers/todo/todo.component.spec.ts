import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoComponent} from './todo.component';
import {TodoService} from "../../services/todo.service";
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {CUSTOM_ELEMENTS_SCHEMA, signal} from "@angular/core";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: TodoService;

  const todoServiceSpy = jasmine.createSpyObj('TodoService', {
    'count': () => signal(0),
    'openCount': () => signal(0),
    'doneCount': () => signal(0),
    'sortedTodos': () => void 0,
    'getAll': () => void 0,
    'add': () => void 0,
    'update': () => void 0,
    'delete': () => void 0
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        provideNoopAnimations(),
        { provide: TodoService, useValue: todoServiceSpy }
      ]
    })
      .overrideComponent(TodoComponent, {
        set: { imports: [], schemas: [CUSTOM_ELEMENTS_SCHEMA] }
      })
    .compileComponents();

    todoService = TestBed.inject(TodoService);

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
