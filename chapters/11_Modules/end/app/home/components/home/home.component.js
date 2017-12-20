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
var foodItem_1 = require('./../../../models/foodItem');
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent(myService) {
        var _this = this;
        this.myService = myService;
        this.currentFood = new foodItem_1.FoodItem();
        this.AddOrUpdateFoodNoValidation = function () {
            var stringObject = JSON.stringify(_this.currentFood);
            alert(stringObject);
        };
        this.AddOrUpdateFoodWithValidation = function () {
            var stringObject = JSON.stringify(_this.currentFood);
            alert(stringObject);
        };
        this.result = myService.add(1, 2);
        this.randomNumber = myService.getRandomNumber();
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map