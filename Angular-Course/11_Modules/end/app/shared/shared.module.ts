import { IsInRangeValidator } from './validators/isInRange.validator';
import { IsNumberValidator } from './validators/isNumber.validator';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        // Modules
        CommonModule
    ],

    declarations: [
        // Components & directives
        IsNumberValidator,
        IsInRangeValidator
    ],

    providers: [
        // Services
    ],

    exports: [
        IsNumberValidator,
        IsInRangeValidator
    ]
})

export class SharedModule { }
