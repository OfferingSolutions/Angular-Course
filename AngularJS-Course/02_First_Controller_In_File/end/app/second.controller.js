(function() {
    
    function secondController($scope) {       
        $scope.value = "This is my second app";
    }
    
     angular
        .module("AngularJsDemoApp")
        .controller("secondController", secondController);
    
    
}());