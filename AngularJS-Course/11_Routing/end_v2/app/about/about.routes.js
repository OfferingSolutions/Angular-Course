(function () {

    "use strict";

    var aboutModule = angular.module("aboutModule");

    aboutModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/about', {
                    templateUrl: 'app/about/templates/about.template.html',
                    controller: 'aboutController',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
} ());
