import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private formBuilder = inject(FormBuilder);

  @Output() todoAdded = new EventEmitter();

  form = this.formBuilder.group({
    todoValue: ['', Validators.required],
    done: [false],
  });

  addTodo() {
    if (!this.form.value.todoValue) {
      return;
    }

    this.todoAdded.emit(this.form.value.todoValue);
    this.form.reset();
  }
}
