import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = `${environment.apiUrl}todos`;
  private http = inject(HttpClient);
  private todos = signal<Todo[]>([]);

  count = computed(() => {
    console.log('Todos changed (count):', this.todos().length);
    return this.todos().length;
  });

  doneItems = computed(() => this.todos().filter((item) => item.done)?.length);

  openItems = computed(() => this.todos().filter((item) => !item.done)?.length);

  sortedTodos = computed(() => this.todos().sort((b, a) => +b.done - +a.done));

  getItems() {
    this.http.get<Todo[]>(this.url).subscribe((todos) => {
      this.todos.set(todos);
    });
  }

  replaceItem() {
    this.todos.update((items) => [...items]);
  }

  addItem(value: string) {
    this.http.post<Todo>(this.url, { value }).subscribe((addedTodo) => {
      this.todos.update((items) => [addedTodo, ...items]);
    });
  }

  updateItem(value: Todo) {
    this.http
      .put<Todo>(`${this.url}/${value.id}`, value)
      .subscribe((updatedTodo) => {
        this.todos.update((items) => {
          if (this.itemIsDone(updatedTodo)) {
            return this.moveToTheEnd(items, updatedTodo);
          }

          return this.replaceOnIndex(items, updatedTodo);
        });
      });
  }

  removeitem(id: string) {
    this.http.delete(`${this.url}/${id}`).subscribe(() => {
      this.todos.update((items) => [...items.filter((item) => item.id !== id)]);
    });
  }

  private itemIsDone(item: Todo) {
    return item.done;
  }

  private moveToTheEnd(items: Todo[], updatedTodo: Todo) {
    const allOtherItems = items.filter((item) => item.id !== updatedTodo.id);

    return [...allOtherItems, updatedTodo];
  }

  private replaceOnIndex(items: Todo[], updatedTodo: Todo) {
    const index = items.findIndex((item) => item.id === updatedTodo.id);
    items[index] = updatedTodo;

    return [...items];
  }
}
