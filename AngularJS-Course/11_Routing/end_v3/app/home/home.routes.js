(function () {

    "use strict";

    var homeModule = angular.module("homeModule");

    homeModule.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'app/home/templates/home.template.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });
        }]);
} ());
