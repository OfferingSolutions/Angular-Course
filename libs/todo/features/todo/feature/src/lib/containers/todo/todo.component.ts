import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  TodoFormComponent,
  TodoHeaderComponent,
  TodoListComponent,
} from '@todo/todo-ui';
import { Todo } from '@todo/todo-domain';
import { TodoStore } from '../../../../../domain/src/lib/state/todo.store';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    TodoHeaderComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  providers: [TodoStore],
})
export class TodoComponent {
  private readonly todoStore = inject(TodoStore);

  readonly sortedTodos = this.todoStore.todos;

  readonly count = this.todoStore.count;

  readonly openCount = this.todoStore.openCount;

  readonly doneCount = this.todoStore.doneCount;

  addTodo(value: string): void {
    this.todoStore.add(value);
  }

  updateTodo(todo: Todo): void {
    this.todoStore.update(todo);
  }

  deleteTodo(id: string): void {
    this.todoStore.delete(id);
  }
}
