(function () {
    "use strict";

    function myFirstServiceService() {

        this.sayHello = function () {
            return "Hello from service!";
        };
        
    }

    angular
        .module("AngularJsDemoApp")
        .service("myFirstServiceService", myFirstServiceService);
} ());