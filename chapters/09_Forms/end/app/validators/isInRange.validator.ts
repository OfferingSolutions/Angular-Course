import { Directive, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

const INT_MAX = 2147483647;

@Directive({
    selector: '[isInRange][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: IsInRangeValidator, multi: true }
    ]
})

export class IsInRangeValidator implements Validator {

    private _minValue: number;
    private _maxValue: number;

    constructor( @Attribute('minValue') minValue: number,
        @Attribute('maxValue') maxValue: number) {

        this._minValue = +minValue || 0;
        this._maxValue = +maxValue || INT_MAX;
    }

    validate(c: FormControl): ValidationErrors | null {
        console.log(this._maxValue);

        let valueToCheck: number = +c.value;
        if (valueToCheck > this._maxValue || valueToCheck < this._minValue) {
            return {
                isInRange: {
                    valid: false
                }
            };
        }

        return null;
    }
}
