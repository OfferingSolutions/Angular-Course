(function () {

    "use strict";

    function homeController() {
        var vm = this;

        vm.userName = "Fabian";

        vm.submitForm = function () {
            alert("You sent " + vm.submittedUserName);
        };

        vm.submitValidatedForm = function () {
            alert("You sent " + vm.validatedUserName);
        };

        vm.submitNgMessageValidatedForm = function () {
            alert("You sent " + vm.validatedUserName);
        };
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);
} ());