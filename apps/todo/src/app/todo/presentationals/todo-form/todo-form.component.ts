import { Component, output } from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  readonly addTodoClicked = output<string>();

  readonly todoValueControl = new FormControl<string>('');

  addTodo(): void {
    if (!this.todoValueControl.value) {
      return;
    }

    this.addTodoClicked.emit(this.todoValueControl.value);
    this.todoValueControl.reset();
  }
}
