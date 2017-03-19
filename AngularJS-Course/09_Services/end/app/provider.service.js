(function () {
    "use strict";

    function myFirstproviderService() {

        this.$get = function () {
            return {
                sayHello: function () {
                    return "Hello from provider!";
                }
            }
        };
    }

    angular
        .module("AngularJsDemoApp")
        .provider("myFirstproviderService", myFirstproviderService);
} ());