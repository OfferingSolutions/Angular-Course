import { Injectable } from '@angular/core';

export class CalculatorService {

    constructor() { }

    public add(x: number, y: number) {
        return x + y;
    }

    public substract(x: number, y: number) {
        return x - y;
    }
}
