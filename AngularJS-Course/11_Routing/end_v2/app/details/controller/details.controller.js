(function () {

    "use strict";

    function detailsController($routeParams) {
        var vm = this;
        vm.value = "You redirected with the ID: " + $routeParams.id;

        // Make my http call with this id
    }

    angular
        .module("detailsModule")
        .controller("detailsController", detailsController);

} ());