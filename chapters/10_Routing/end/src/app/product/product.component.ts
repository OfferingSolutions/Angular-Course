import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../models/foodItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  foodItems: FoodItem[] = [];

  constructor(private router: Router) {
    const foodItemToPush = new FoodItem();
    foodItemToPush.calories = 999;
    foodItemToPush.id = 999;
    foodItemToPush.created = new Date();
    foodItemToPush.name = 'Lasagne';

    this.foodItems.push(foodItemToPush);
  }

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  ngOnInit() {}
}
