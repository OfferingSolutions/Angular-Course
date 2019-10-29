import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../../core/services/calculator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  lazyRandomNumber: number;

  constructor(private myService: CalculatorService) {
    this.lazyRandomNumber = myService.getRandomNumber();
  }
}
