import { TestBed, waitForAsync } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { Todo } from "../models/todo.models";

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  const BASE_URL = 'https://sampletodobackend.azurewebsites.net/api/v1';


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should fetch all todos and update the signal', waitForAsync(() => {
      // Arrange
      const url = `${BASE_URL}/todos`;

      // Act
      service.getAll();

      const req = httpMock.expectOne(url);
      req.flush(getMockTodos());

      // Assert
      // expect(service.count()).toBe(2);
      // expect(service.doneCount()).toBe(1);
      // expect(service.openCount()).toBe(1);
      expect(service.sortedTodos()).toEqual([
        { id: '1', value: 'Task 1', done: false },
        { id: '2', value: 'Task 2', done: true }
      ]);
    }));
  });

  describe('add', () => {
    it('should add a new todo and update the list', waitForAsync(() => {
      // Arrange
      const url = `${BASE_URL}/todos`;
      const newTodo: Todo = { id: '3', value: 'Task 3', done: false };
      service.getAll(); // Initialize todos first
      httpMock.expectOne(`${BASE_URL}/todos`).flush(getMockTodos());

      // Act
      service.add('Task 3');
      const req = httpMock.expectOne(url);
      req.flush(newTodo);

      // Assert
      expect(service.count()).toBe(3);
      expect(service.sortedTodos()[0]).toEqual(newTodo);
    }));
  });

  describe('update', () => {
    it('should update an existing todo and reorder if necessary when done is true', waitForAsync(() => {
      // Arrange
      service.getAll();
      httpMock.expectOne(`${BASE_URL}/todos`).flush(getMockTodos());
      const updatedTodo: Todo = { id: '1', value: 'Updated Task 1', done: true };
      const url = `${BASE_URL}/todos/1`;

      // Act
      service.update(updatedTodo);
      const req = httpMock.expectOne(url);
      req.flush(updatedTodo);

      // Assert
      expect(service.sortedTodos()[1]).toEqual(updatedTodo);
      expect(service.doneCount()).toBe(2);
    }));

    it('should update an existing todo and reorder if necessary when done is false', waitForAsync(() => {
      // Arrange
      service.getAll();
      httpMock.expectOne(`${BASE_URL}/todos`).flush(getMockTodos());
      const updatedTodo: Todo = { id: '2', value: 'Updated Task 2', done: false };
      const url = `${BASE_URL}/todos/2`;

      // Act
      service.update(updatedTodo);
      const req = httpMock.expectOne(url);
      req.flush(updatedTodo);

      // Assert
      expect(service.sortedTodos()[1]).toEqual(updatedTodo);
      expect(service.doneCount()).toBe(0);
    }));
  });

  describe('delete', () => {
    it('should delete a todo and update the list', waitForAsync(() => {
      // Arrange
      service.getAll();
      httpMock.expectOne(`${BASE_URL}/todos`).flush(getMockTodos());
      const url = `${BASE_URL}/todos/1`;

      // Act
      service.delete('1');
      const req = httpMock.expectOne(url);
      req.flush(null);

      // Assert
      expect(service.count()).toBe(1);
      expect(service.sortedTodos().some(todo => todo.id === '1')).toBeFalse();
    }));
  });

  describe('computed properties', () => {
    it('should correctly compute count, doneCount, openCount, and sortedTodos', waitForAsync(() => {
      // Arrange
      service['todos'].set(getMockTodos());

      // Assert
      expect(service.count()).toBe(2);
      expect(service.doneCount()).toBe(1);
      expect(service.openCount()).toBe(1);
      expect(service.sortedTodos()).toEqual([
        { id: '1', value: 'Task 1', done: false },
        { id: '2', value: 'Task 2', done: true }
      ]);
    }));
  });
});

function getMockTodos(): Todo[] {
  return [
    { id: '1', value: 'Task 1', done: false },
    { id: '2', value: 'Task 2', done: true }
  ];
}
