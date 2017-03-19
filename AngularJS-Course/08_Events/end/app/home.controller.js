(function () {

    "use strict";

    function homeController($scope) {
        var vm = this;

        vm.sayMyName = function () {
            vm.myName = "Fabian";

            // Also throw an event
            $scope.$broadcast('parent', 'This comes from an event'); // going down!
        };

        vm.items = ["Burger", "Pommes", "Salat"];

        vm.alertTheItem = function (item) {
            alert(item);
        };

        $scope.$on('fromChild', function (event, data) {
            alert(data);
        });
    }


    function parentCtrl($scope) {
        var parent = this;

        $scope.$on('parent', function (event, data) {
            console.log(data); // 'This comes from an event'
            parent.data = data;
        });

        parent.throwEventUp = function () {
            $scope.$emit('fromChild', 'This comes from the child');
        }
    }


    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController)
        .controller("parentCtrl", parentCtrl);

} ());