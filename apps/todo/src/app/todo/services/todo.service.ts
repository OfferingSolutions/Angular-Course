import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.models';
import { Observable, take } from 'rxjs';

const BASE_URL = 'https://sampletodobackend.azurewebsites.net/api/v1';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);

  private readonly todos = signal<Todo[]>([]);

  readonly count = computed(() => {
    return this.todos().length;
  });

  readonly doneCount = computed(
    () => this.todos().filter((item) => item.done).length
  );

  readonly openCount = computed(
    () => this.todos().filter((item) => !item.done).length
  );

  readonly sortedTodos = computed(() =>
    this.todos().sort((b, a) => +b.done - +a.done)
  );

  getAll() {
    const url = `${BASE_URL}/todos`;

    this.http
      .get<Todo[]>(url)
      .pipe(take(1))
      .subscribe((todos) => {
        this.todos.set(todos);
      });
  }

  add(value: string) {
    const url = `${BASE_URL}/todos`;

    this.http.post<Todo>(url, { value }).subscribe((addedTodo) => {
      this.todos.update((items) => [addedTodo, ...items]);
    });
  }

  update(todo: Todo) {
    const url = `${BASE_URL}/todos/${todo.id}`;

    this.http.put<Todo>(url, todo).subscribe((updatedTodo) => {
      this.todos.update((items) => {
        if (this.isDone(updatedTodo)) {
          return this.moveToEnd(items, updatedTodo);
        }

        return this.replaceOnIndex(items, updatedTodo);
      });
    });
  }

  delete(id: string) {
    const url = `${BASE_URL}/todos/${id}`;

    this.http.delete(url).subscribe(() => {
      this.todos.update((todos) => [...todos.filter((todo) => todo.id !== id)]);
    });
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
