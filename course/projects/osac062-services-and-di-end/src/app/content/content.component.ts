import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatorService } from '../core/calculator/calculator.service';
import { ItemDataService } from '../core/item-data/item-data.service';
import { FoodItem } from '../models/foodItem';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  result: number;
  randomWithFactoryValue: number;
  randomWithValue: number;

  observable$: Observable<FoodItem[]>;

  constructor(
    private calculatorService: CalculatorService,
    @Inject('RandomWithFactory') randomWithFactory: number,
    @Inject('RandomWithValue') randomWithValue: number,
    private dataService: ItemDataService
  ) {
    this.randomWithFactoryValue = randomWithFactory;
    this.randomWithValue = randomWithValue;
  }

  ngOnInit() {
    this.result = this.calculatorService.add(1, 3);

    this.observable$ = this.dataService.getAllFood();
  }
}
