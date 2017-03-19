(function () {
    "use strict";

    function myFirstFactoryService() {
        //andere Schreibweise erläutern
        function _sayHello() {
            return "Hello from factory!";
        }

        return {
            sayHello: _sayHello
        };
    }

    angular
        .module("AngularJsDemoApp")
        .factory("myFirstFactoryService", myFirstFactoryService);
} ());