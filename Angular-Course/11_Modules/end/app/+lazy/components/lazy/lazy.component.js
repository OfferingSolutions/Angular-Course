"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calculator_service_1 = require('./../../../core/services/calculator.service');
var core_1 = require('@angular/core');
var LazyComponent = (function () {
    function LazyComponent(myService) {
        this.myService = myService;
        this.result = myService.add(1, 2);
        this.lazyRandomNumber = myService.getRandomNumber();
    }
    LazyComponent = __decorate([
        core_1.Component({
            selector: 'lazy',
            templateUrl: './lazy.component.html'
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
    ], LazyComponent);
    return LazyComponent;
}());
exports.LazyComponent = LazyComponent;
//# sourceMappingURL=lazy.component.js.map