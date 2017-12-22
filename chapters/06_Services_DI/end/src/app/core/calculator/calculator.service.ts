import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  add(x: number, y: number) {
    return x + y;
  }

  substract(x: number, y: number) {
    return x - y;
  }
}
