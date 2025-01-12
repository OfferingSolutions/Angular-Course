import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {Todo} from "../../models/todo.models";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    fixture.componentRef.setInput('todos', []);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleDone', () => {
    it('should emit doneToggled event', () => {
      // arrange
      const todo: Todo = {
        id: '123',
        value: 'Some Value',
        done: false
      };
      const expectedTodo: Todo = {
        ...todo,
        done: !todo.done
      };
      const emitSpy = spyOn(component.doneToggled, 'emit');

      // act
      component.toggleDone(todo);

      // assert
      expect(emitSpy).toHaveBeenCalledWith(expectedTodo);
    });
  });

  describe('delete', () => {
    it('should emit deletedClicked event when confirm was true', () => {
      // arrange
      const id = '123';
      const emitSpy = spyOn(component.deleteClicked, 'emit');

      spyOn(window, 'confirm')
        .and
        .returnValue(true);

      // act
      component.delete(id);

      // assert
      expect(emitSpy).toHaveBeenCalledWith(id);
    });

    it('should not emit deletedClicked event when confirm was false', () => {
      // arrange
      const id = '123';
      const emitSpy = spyOn(component.deleteClicked, 'emit');

      spyOn(window, 'confirm')
        .and
        .returnValue(false);

      // act
      component.delete(id);

      // assert
      expect(emitSpy).not.toHaveBeenCalled();
    })
  })
});
