(function () {

    "use strict";

    function detailsController($stateParams) {
        var vm = this;
        vm.value = "You redirected with the ID: " + $stateParams.id;

        // Make my http call with this id
    }

    angular
        .module("detailsModule")
        .controller("detailsController", detailsController);

} ());