(function() {

    "use strict";

    var app = angular.module("AngularJsDemoApp", []);

    homeController.$inject = ["$scope"];

    function homeController($scope) {
        $scope.value = "This is my first app";
    }

    app.controller("homeController", homeController);
} ());
