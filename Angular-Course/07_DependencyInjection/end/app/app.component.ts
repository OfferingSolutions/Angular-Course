import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CalculatorService } from './shared/services/calculator.service';
import { FoodDataService } from './shared/services/item.dataservice';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    public result: number;
    public randomWithFactoryValue: number;
    public randomWithValue: number;

    observable$: Observable<any>;

    constructor(private calculatorService: CalculatorService,
        @Inject('RandomWithFactory') randomWithFactory: number,
        @Inject('RandomWithValue') randomWithValue: number,
        private dataService: FoodDataService) {

        this.randomWithFactoryValue = randomWithFactory;
        this.randomWithValue = randomWithValue;

    }

    ngOnInit() {
        this.result = this.calculatorService.add(1, 3);

        this.observable$ = this.dataService.getAllFood();
    }
}
