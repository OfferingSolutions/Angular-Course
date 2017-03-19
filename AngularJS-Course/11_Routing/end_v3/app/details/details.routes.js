(function () {

    "use strict";

    var detailsModule = angular.module("detailsModule");

    detailsModule.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('details', {
                url: '/details/:id',
                templateUrl: 'app/details/templates/details.template.html',
                controller: 'detailsController',
                controllerAs: 'vm'
            });
        }]);
} ());
