import {Component, inject, OnInit, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TodoFormComponent, TodoHeaderComponent, TodoListComponent} from "@todo/todo-ui";
import {Todo} from "@todo/todo-domain";
import {TodoStore} from "../../../../../domain/src/lib/state/todo.store";

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
  providers: [TodoStore]
})
export class TodoComponent implements OnInit {
  private readonly todoStore = inject(TodoStore);

  readonly sortedTodos = this.todoStore.todos;

  readonly count = signal(0);

  readonly openCount = signal(0);

  readonly doneCount = signal(0);

  ngOnInit(): void {
    // this.todoService.getAll();
  }

  addTodo(value: string): void {
    // this.todoService.add(value);
  }

  updateTodo(todo: Todo): void {
    // this.todoService.update(todo);
  }

  deleteTodo(id: string): void {
    // this.todoService.delete(id);
  }
}
