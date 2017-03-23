import { CalculatorService } from './../../shared/calculator.service';
import { FoodItem } from '../../models/foodItem';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})


export class HomeComponent {
    public currentFood: FoodItem = new FoodItem();
    public result: number;

    constructor(private myService: CalculatorService) {
        this.result = myService.add(1, 2);
    }

    public AddOrUpdateFoodNoValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }

    public AddOrUpdateFoodWithValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }
}
