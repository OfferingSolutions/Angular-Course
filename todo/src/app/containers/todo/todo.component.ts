import {Component, computed, signal} from '@angular/core';
import {Todo} from "../../models/todo.models";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TodoHeaderComponent} from "../../presentationals/todo-header/todo-header.component";
import {TodoFormComponent} from "../../presentationals/todo-form/todo-form.component";

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
    TodoFormComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  readonly todos = signal<Todo[]>([]);

  readonly todoLength = computed(() => this.todos().length);

  addTodo(value: string): void {
    const todo: Todo = {
      id: '1',
      value,
      done: false
    };

    this.todos.update((todos) => [...todos, todo]);
  }
}