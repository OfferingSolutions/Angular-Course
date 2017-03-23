import { FoodItem } from './models/foodItem';
import { FoodDataService } from './shared/services/item.dataservice';
import { CalculatorService } from './shared/services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    public result: number;
    private calculatorService: CalculatorService;
    private itemDataService: FoodDataService;
    public items: FoodItem[];

    constructor(private http: Http) {
        this.calculatorService = new CalculatorService();
        this.itemDataService = new FoodDataService(http);
    }

    ngOnInit() {
        this.result = this.calculatorService.add(1, 3);
        this.itemDataService.GetAllFood().subscribe((result) => {
            this.items = result;
        });
    }
}
