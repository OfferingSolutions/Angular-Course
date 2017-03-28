import { CalculatorService } from './../../../core/services/calculator.service';
import { Component } from '@angular/core';

@Component({
    selector: 'lazy',
    templateUrl: './lazy.component.html'
})


export class LazyComponent {
    public result: number;
    public lazyRandomNumber: number;

    constructor(private myService: CalculatorService) {
        this.result = myService.add(1, 2);
        this.lazyRandomNumber = myService.getRandomNumber();
    }
}
