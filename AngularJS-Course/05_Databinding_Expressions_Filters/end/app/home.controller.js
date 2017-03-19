(function () {

    "use strict";

    homeController.$inject = ["$scope"];

    function homeController($scope) {

        $scope.value = "This is my first app";

        $scope.clickMe = function () {
            alert("Clicked");
        }

        $scope.add = function (a, b) {
            return a + b;
        }

        $scope.foodItem = { calories: 500 }

       $scope.foodItems = ["Burger", "Pommes", "Nudeln"];

        $scope.dateForFilter = new Date();
    }

    function myCustomFilter() {
        return function (param1, param2) {
            console.log("param1 " + param1);
            console.log("param2 " + param2);

            if (param1 && param2) {
                return "Hello";
            }
        };
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController)
        .filter('myCustomFilter', myCustomFilter);

} ());