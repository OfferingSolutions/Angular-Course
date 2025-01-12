import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TodoFormComponent, TodoHeaderComponent, TodoListComponent} from "@todo/todo-ui";
import {Todo, TodoService} from "@todo/todo-domain";

@Component({
    selector: 'app-todo',
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
    styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  private readonly todoService = inject(TodoService);

  readonly sortedTodos = this.todoService.sortedTodos;

  readonly count = this.todoService.count;

  readonly openCount = this.todoService.openCount;

  readonly doneCount = this.todoService.doneCount;

  ngOnInit(): void {
    this.todoService.getAll();
  }

  addTodo(value: string): void {
    this.todoService.add(value);
  }

  updateTodo(todo: Todo): void {
    this.todoService.update(todo);
  }

  deleteTodo(id: string): void {
    this.todoService.delete(id);
  }
}
