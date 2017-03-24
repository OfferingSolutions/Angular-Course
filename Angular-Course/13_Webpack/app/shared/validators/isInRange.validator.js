var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var IsInRangeValidator = IsInRangeValidator_1 = (function () {
    function IsInRangeValidator() {
    }
    IsInRangeValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        if (c.value > 2147483647 || c.value < 0) {
            return {
                isInRange: {
                    valid: false
                }
            };
        }
        return null;
    };
    return IsInRangeValidator;
}());
IsInRangeValidator = IsInRangeValidator_1 = __decorate([
    Directive({
        selector: '[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return IsInRangeValidator_1; }), multi: true }
        ]
    })
], IsInRangeValidator);
export { IsInRangeValidator };
var IsInRangeValidator_1;
//# sourceMappingURL=isInRange.validator.js.map