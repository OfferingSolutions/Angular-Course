(function () {

    "use strict";

    function homeService($http) {
        
        var url = 'http://foodapi4demo.azurewebsites.net/api/'
        
        var _getData = function () {
            return $http.get(url);
        }

        return {
            getData: _getData
        }
    }

    angular
        .module("AngularJsDemoApp")
        .factory("homeService", homeService);

} ());