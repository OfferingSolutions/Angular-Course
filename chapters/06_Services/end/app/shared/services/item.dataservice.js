"use strict";
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var FoodDataService = (function () {
    function FoodDataService(_http) {
        var _this = this;
        this._http = _http;
        this.GetAllFood = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingleFood = function (id) {
            return _this._http.get(_this.actionUrl + id)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.AddFood = function (foodItem) {
            var toAdd = JSON.stringify({
                name: foodItem.name,
                calories: foodItem.calories,
                created: new Date()
            });
            var options = _this.prepareOptions(null);
            return _this._http.post(_this.actionUrl, toAdd, options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.UpdateFood = function (id, foodToUpdate) {
            var options = _this.prepareOptions(null);
            return _this._http.put(_this.actionUrl + id, JSON.stringify(foodToUpdate), options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.DeleteFood = function (id) {
            return _this._http.delete(_this.actionUrl + id)
                .catch(_this.handleError);
        };
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new http_1.Headers();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
        this.actionUrl = 'https://randomuser.me/api/';
        // this.actionUrl = 'http://foodapi4demo.azurewebsites.net/api/food/';
    }
    FoodDataService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    return FoodDataService;
}());
exports.FoodDataService = FoodDataService;
//# sourceMappingURL=item.dataservice.js.map