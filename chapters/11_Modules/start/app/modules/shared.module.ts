import { CalculatorService } from './../shared/calculator.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IsNumberValidator } from '../validators/isNumber.validator';
import { IsInRangeValidator } from '../validators/isInRange.validator';
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
        CalculatorService
    ],

    exports: [
        IsNumberValidator,
        IsInRangeValidator
    ]
})

export class SharedModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: SharedModule,
    //         providers: [MyService]
    //     };
    // }
}
