import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../core/services/calculator.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  lazyRandomNumber: number;

  constructor(private myService: CalculatorService) {
    this.lazyRandomNumber = myService.getRandomNumber();
  }
}
