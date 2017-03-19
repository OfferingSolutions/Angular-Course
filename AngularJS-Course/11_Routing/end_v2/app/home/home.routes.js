(function () {

    "use strict";

    var homeModule = angular.module("homeModule");

    homeModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/home/templates/home.template.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
} ());
