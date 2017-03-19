(function () {

    "use strict";

    function aboutController() {
        var vm = this;
        vm.value = "Hello from about";
    }

    angular
        .module("AngularJSDemoApp")
        .controller("aboutController", aboutController);

} ());