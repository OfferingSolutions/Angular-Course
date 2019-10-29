import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appIsNumber][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IsNumberValidator, multi: true }
  ]
})
export class IsNumberValidator implements Validator {
  validate(c: FormControl): ValidationErrors | null {
    if (isNaN(+c.value)) {
      return {
        isNumber: {
          message: 'This could be a validation message'
        }
      };
    }

    return null;
  }
}
