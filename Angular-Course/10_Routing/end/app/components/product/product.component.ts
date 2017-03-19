import { Router } from '@angular/router';
import { FoodItem } from './../../models/foodItem';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {

    public foodItems: FoodItem[] = [];

    constructor(private router: Router) {

        let foodItemToPush = new FoodItem();
        foodItemToPush.calories = 999;
        foodItemToPush.id = 999;
        foodItemToPush.created = new Date();
        foodItemToPush.name = 'Lasagne';

        this.foodItems.push(foodItemToPush);
    }

    public goToDetails(id: number) {
        this.router.navigate(['/product', id]);
    }


    ngOnInit() { }
}
