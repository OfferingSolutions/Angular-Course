import {Component} from '@angular/core';
import {Todo} from "../models/todo.models";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-todo',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss'
})
export class TodoComponent {
  readonly todoValueControl = new FormControl<string>('');

  readonly todos: Todo[] = [];

  addTodo(): void {
    const todoValue = this.todoValueControl.value;

    if (!todoValue) {
      return;
    }

    const todo: Todo = {
      id: '1',
      value: todoValue,
      done: false
    };

    this.todos.push(todo);
  }
}
