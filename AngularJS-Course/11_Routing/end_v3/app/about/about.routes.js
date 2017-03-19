(function () {

    "use strict";

    var aboutModule = angular.module("aboutModule");

    aboutModule.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'app/about/templates/about.template.html',
                controller: 'aboutController',
                controllerAs: 'vm'
            });
        }]);
} ());
