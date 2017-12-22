import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDataService } from './item-data/item-data.service';
import { CalculatorService } from './calculator/calculator.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ItemDataService, CalculatorService]
})
export class CoreModule {}
