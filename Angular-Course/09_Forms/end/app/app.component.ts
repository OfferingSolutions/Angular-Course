import { FoodItem } from './models/foodItem';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public currentFood: FoodItem = new FoodItem();

    public AddOrUpdateFoodNoValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }

     public AddOrUpdateFoodWithValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }
}
