"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var IsNumberValidator = IsNumberValidator_1 = (function () {
    function IsNumberValidator() {
    }
    IsNumberValidator.prototype.validate = function (c) {
        if (isNaN(+c.value)) {
            return {
                isNumber: {
                    message: 'This could be a validation message'
                }
            };
        }
        return null;
    };
    return IsNumberValidator;
}());
IsNumberValidator = IsNumberValidator_1 = __decorate([
    core_1.Directive({
        selector: '[isNumber][ngModel]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: IsNumberValidator_1, multi: true }
        ]
    })
], IsNumberValidator);
exports.IsNumberValidator = IsNumberValidator;
var IsNumberValidator_1;
//# sourceMappingURL=isNumber.validator.js.map