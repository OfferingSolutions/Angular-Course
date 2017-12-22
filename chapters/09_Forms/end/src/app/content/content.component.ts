import { FoodItem } from '../models/foodItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  currentFood = new FoodItem();

  addOrUpdateFoodNoValidation(): void {
    const stringObject = JSON.stringify(this.currentFood);
    alert(stringObject);
  }

  addOrUpdateFoodWithValidation(): void {
    const stringObject = JSON.stringify(this.currentFood);
    alert(stringObject);
  }
}
