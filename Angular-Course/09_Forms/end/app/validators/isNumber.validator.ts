import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[isNumber][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: IsNumberValidator, multi: true }
    ]
})

export class IsNumberValidator implements Validator {

    validate(c: FormControl): { [key: string]: any } {

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
