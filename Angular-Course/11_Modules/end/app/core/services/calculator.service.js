"use strict";
var CalculatorService = (function () {
    function CalculatorService() {
        this.random = Math.random() * 100;
    }
    CalculatorService.prototype.add = function (x, y) {
        return x + y;
    };
    CalculatorService.prototype.getRandomNumber = function () {
        return this.random;
    };
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=calculator.service.js.map