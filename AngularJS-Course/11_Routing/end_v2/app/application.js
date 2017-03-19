(function () {

    "use strict";

    var app = angular.module("AngularJsDemoApp",
        [
            'ngRoute',

            'homeModule',
            'aboutModule',
            'detailsModule'
        ]);

    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');
        }]);
} ());
