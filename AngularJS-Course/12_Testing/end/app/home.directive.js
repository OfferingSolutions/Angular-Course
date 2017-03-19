(function () {
    'use strict';

    function myFirstDirective() {
        return {
            restrict: 'E',
            replace: true,
            template: '<h1>Hello, this should be evaluated: {{1 + 1}}</h1>'
        };
    };

    angular
        .module("AngularJsDemoApp")
        .directive("myFirstDirective", myFirstDirective);

} ());