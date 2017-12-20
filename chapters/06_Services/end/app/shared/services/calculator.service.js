"use strict";
var CalculatorService = (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.add = function (x, y) {
        return x + y;
    };
    CalculatorService.prototype.substract = function (x, y) {
        return x - y;
    };
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=calculator.service.js.map