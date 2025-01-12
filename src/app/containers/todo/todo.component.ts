import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TodoHeaderComponent} from "../../presentationals/todo-header/todo-header.component";
import {TodoFormComponent} from "../../presentationals/todo-form/todo-form.component";
import {TodoService} from "../../services/todo.service";
import {TodoListComponent} from "../../presentationals/todo-list/todo-list.component";
import {Todo} from "../../models/todo.models";

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
    TodoListComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  private readonly todoService = inject(TodoService);

  readonly sortedTodos = this.todoService.sortedTodos

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
