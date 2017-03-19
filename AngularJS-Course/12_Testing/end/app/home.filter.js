
(function () {

    'use strict';

    function filterFunction() {
        return function (text) {
            return ('' + (text || '')).length;
        }
    }

    angular
        .module("AngularJsDemoApp")
        .filter("length", filterFunction);

} ());