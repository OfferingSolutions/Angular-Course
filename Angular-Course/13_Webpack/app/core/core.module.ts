import { CommonModule } from '@angular/common';
import { CalculatorService } from './services/calculator.service';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: [CalculatorService],
})
export class CoreModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: CoreModule,
    //         providers: [CalculatorService]
    //     };
    // }
}
