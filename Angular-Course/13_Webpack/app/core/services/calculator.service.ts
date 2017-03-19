export class CalculatorService {

    private random: number;

    constructor() {
        this.random = Math.random() * 100;
    }

    public add(x: number, y: number) {
        return x + y;
    }

    public getRandomNumber() {
        return this.random;
    }
}
