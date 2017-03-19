(function() {

    "use strict";

    homeController.$inject = ["$scope"];

    function homeController($scope) {       
        $scope.value = "This is my first app";
    }

     angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());