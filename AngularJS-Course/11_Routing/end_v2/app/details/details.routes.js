(function () {

    "use strict";

    var detailsModule = angular.module("detailsModule");

    detailsModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/details/:id', {
                    templateUrl: 'app/details/templates/details.template.html',
                    controller: 'detailsController',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
} ());
