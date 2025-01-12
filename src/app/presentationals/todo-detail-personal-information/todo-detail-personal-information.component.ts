import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {passportValidator} from "./passport.validator";

@Component({
  selector: 'app-todo-detail-personal-information',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError
  ],
  templateUrl: './todo-detail-personal-information.component.html',
  styleUrl: './todo-detail-personal-information.component.scss'
})
export class TodoDetailPersonalInformationComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0, [Validators.required]),
    passportId: new FormControl<string>('')
  }, { validators: passportValidator })
}
