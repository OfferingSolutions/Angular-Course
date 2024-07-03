import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo.models';
import {Observable} from 'rxjs';

const BASE_URL = 'https://sampletodobackend.azurewebsites.net/api/v1';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Todo[]> {
    const url = `${BASE_URL}/todos`;

    return this.http.get<Todo[]>(url)
  }

  add(value: string): Observable<Todo> {
    const url = `${BASE_URL}/todos`;

    return this.http.post<Todo>(url, { value });
  }

  update(todo: Todo): Observable<Todo> {
    const url = `${BASE_URL}/todos/${todo.id}`;

    return this.http.put<Todo>(url, todo);
  }

  delete(id: string): Observable<void> {
    const url = `${BASE_URL}/todos/${id}`;

    return this.http.delete<void>(url);
  }

  get(id: string): Observable<Todo> {
    const url = `${BASE_URL}/todos/${id}`;

    return this.http.get<Todo>(url);
  }

  private isDone(todo: Todo) {
    return todo.done;
  }

  private moveToEnd(todos: Todo[], updatedTodo: Todo) {
    const allOtherTodos = todos.filter((todo) => todo.id !== updatedTodo.id);

    return [...allOtherTodos, updatedTodo];
  }

  private replaceOnIndex(todos: Todo[], updatedTodo: Todo) {
    const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
    todos[index] = updatedTodo;

    return [...todos];
  }
}
