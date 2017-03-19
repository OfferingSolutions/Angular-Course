(function() {

    "use strict";

    function homeController($http) {    
        var vm = this;   
        
        vm.value="My First angular application";
        
    }

     angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());