(function () {

    "use strict";

    function aboutController() {
        var vm = this;
        vm.value = "Hello from about";
    }

    angular
        .module("aboutModule")
        .controller("aboutController", aboutController);

} ());