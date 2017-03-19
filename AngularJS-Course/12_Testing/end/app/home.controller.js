(function () {

    "use strict";

    function homeController() {
        var vm = this;

        vm.value = "My First angular application";

        vm.add = function (x, y) {
            return x + y;
        }
    }

    function homeControllerWithScope($scope) {

        $scope.value = "My First angular application";

        $scope.add = function (x, y) {
            return x + y;
        }
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeControllerWithScope", homeControllerWithScope);

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);
} ());