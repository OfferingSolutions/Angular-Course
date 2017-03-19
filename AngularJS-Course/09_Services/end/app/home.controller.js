(function () {

    "use strict";

    function homeController($http,
        myFirstproviderService,
        myFirstServiceService,
        myFirstFactoryService) {
            
        var vm = this;

        vm.value = "Services? Services!!";

        vm.providerResult = myFirstproviderService.sayHello();
        vm.serviceResult = myFirstServiceService.sayHello();
        vm.factoryResult = myFirstFactoryService.sayHello();

        $http.get('http://foodapi4demo.azurewebsites.net/api/food/').then(
            function (response) {
                //success asynchron

                var exampleHeader = "Content-Type";

                alert(JSON.stringify(response.data));
                alert(response.status);
                alert(response.headers(exampleHeader));
                alert(JSON.stringify(response.config));
                alert(response.statusText);
            },
            function (error) {
                //error asynchron
                console.log(error);
            }
        ).finally(function () {
            //finally
            console.log("completely done");
        });

    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());