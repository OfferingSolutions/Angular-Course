export class CalculatorService {
  private random: number;

  constructor() {
    this.random = Math.random() * 100;
    console.log('-----------> constructor');
  }

  add(x: number, y: number) {
    return x + y;
  }

  getRandomNumber() {
    return this.random;
  }
}
