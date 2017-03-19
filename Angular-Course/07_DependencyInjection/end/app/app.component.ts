import { FoodDataService } from './shared/services/item.dataservice';
import { CalculatorService } from './shared/services/calculator.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    public result: number;
    public randomWithFactoryValue: number;
    public randomWithValue: number;

    constructor(private calculatorService: CalculatorService,
        @Inject('RandomWithFactory') randomWithFactory: number,
        @Inject('RandomWithValue') randomWithValue: number,
        private dataService: FoodDataService) {

        this.randomWithFactoryValue = randomWithFactory;
        this.randomWithValue = randomWithValue;

    }

    ngOnInit() {
        this.result = this.calculatorService.add(1, 3);
    }
}
