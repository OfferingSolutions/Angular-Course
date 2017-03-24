var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsInRangeValidator } from './validators/isInRange.validator';
import { IsNumberValidator } from './validators/isNumber.validator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [
            // Modules
            CommonModule
        ],
        declarations: [
            // Components & directives
            IsNumberValidator,
            IsInRangeValidator
        ],
        providers: [],
        exports: [
            IsNumberValidator,
            IsInRangeValidator
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map