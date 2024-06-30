import {Component, input, output} from '@angular/core';
import {Todo} from "../../models/todo.models";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatButton,
    MatCheckbox
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = input.required<Todo[]>();

  doneToggled = output<Todo>();

  deleteClicked = output<string>();

  toggleDone(todo: Todo) {
    todo.done = !todo.done;
    this.doneToggled.emit(todo);
  }

  delete(id: string) {
    if (confirm('Do you really want to delete?')) {
      this.deleteClicked.emit(id);
    }
  }
}
