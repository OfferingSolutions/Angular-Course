(function() {

    "use strict";

    firstController.$inject = ["$scope"];

    function firstController($scope) {       
        $scope.value = "firstController";
    }

     angular
        .module("firstModule")
        .controller("firstController", firstController);

} ());