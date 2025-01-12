import {Component, effect, inject, input, output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Todo} from "../../models/todo.models";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-todo-detail-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './todo-detail-form.component.html',
  styleUrl: './todo-detail-form.component.scss'
})
export class TodoDetailFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly todo = input.required<Todo>();

  readonly saved = output<Todo>();

  private readonly _setFormValues = effect(() => this.setFormValues(this.todo()));

  readonly form = this.fb.group({
    id: new FormControl({ value: '', disabled: true }),
    todoValue: new FormControl('', [Validators.required]),
  });

  save(): void {
    const value = this.form.controls.todoValue.value;

    if (!value) {
      return;
    }

    const updatedTodo: Todo = {
      ...this.todo(),
      value
    }

    this.saved.emit(updatedTodo);
  }

  private setFormValues(todo: Todo | undefined): void {
    if (!todo) {
      return;
    }

    this.form.controls.id.setValue(todo.id);
    this.form.controls.todoValue.setValue(todo.value)
  }
}
