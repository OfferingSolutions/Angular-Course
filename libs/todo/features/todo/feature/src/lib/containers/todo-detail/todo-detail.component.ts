import { Component, effect, inject, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { TodoDetailFormComponent } from '@todo/todo-ui';
import { Todo } from '@todo/todo-domain';
import { TodoStore } from '../../../../../domain/src/lib/state/todo.store';

@Component({
    selector: 'app-todo-detail',
    imports: [TodoDetailFormComponent, MatProgressSpinner],
    templateUrl: './todo-detail.component.html',
    styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  private readonly todoStore = inject(TodoStore);

  readonly id = input.required<string>();

  readonly todo = this.todoStore.current;

  private readonly _loadCurrentTodo = effect(() =>
    this.todoStore.get(this.id())
  );

  save(todo: Todo): void {
    this.todoStore.update(todo);
  }
}
