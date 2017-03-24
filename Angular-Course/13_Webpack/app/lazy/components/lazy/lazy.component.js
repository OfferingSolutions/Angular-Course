var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CalculatorService } from './../../../core/services/calculator.service';
import { Component } from '@angular/core';
var LazyComponent = (function () {
    function LazyComponent(myService) {
        this.myService = myService;
        this.result = myService.add(1, 2);
        this.lazyRandomNumber = myService.getRandomNumber();
    }
    return LazyComponent;
}());
LazyComponent = __decorate([
    Component({
        selector: 'lazy',
        templateUrl: './lazy.component.html'
    }),
    __metadata("design:paramtypes", [CalculatorService])
], LazyComponent);
export { LazyComponent };
//# sourceMappingURL=lazy.component.js.map