(function () {

    "use strict";

    function homeController() {
        var vm = this;
        vm.foodItems = ["Burger", "Pommes", "Nudeln"];

        vm.toggleVisibilityWithNgShow = function () {
            vm.isVisible = !vm.isVisible;
        }

        vm.toggleVisibilityWithNgSwitch = function () {
            if (vm.switch === 1) {
                vm.switch = 2;
            } else {
                vm.switch = 1;
            }
        }

        vm.resetSwitch = function () {
            vm.switch = 0;
        }

        vm.toggleVisibilityWithNgIf = function () {
            vm.ngif = !vm.ngif;
        }
    }

    function secondController() {
        var vm = this;
        vm.text = "This comes from the second controller";
        vm.text2 = "This is for the isolated directives...."
    }
    
     function thirdController() {
        var vm = this;
        vm.items = ["Hamburger", "Pommes", "Ketchup"];
    }

    function myDirective() {
        return {
            restrict: "AEC",
            template: "<h4>Hellooooo!</h4>"
        };
    }

    function myDirective2() {
        return {
            restrict: "AEC",
            template: "<h4>{{vm.text}}</h4>"
        };
    }

    function isolatedScopeDirective() {
        return {
            restrict: "AEC",
            scope: {},
            bindToController: {
                givenText: '=text'
            },
            controller: function(){
            },
            controllerAs: 'vm',
            template: "<h4>Isolated: {{vm.givenText}}</h4>"
        };
    }

    function isolatedScopeDirectiveWithLink() {
        return {
            restrict: "AEC",
            scope: {},
            bindToController: {
                givenText: '=text'
            },
            controller: function () {

            },
            controllerAs: 'vm',
            link: function (scope, element, attributes, controller) {
                element.html(scope.vm.text);
                element.css("background-color", "#ffff00");
            },
            template: "{{vm.givenText}}"
        };
    }

    function isolatedScopeDirectiveWithController() {
        return {
            restrict: "AEC",
            link: function (scope, element, attributes, controller) {
                element.css("background-color", "#ffff00");
            },
            scope: {},
            bindToController: {

            },
            controller: function () {
                var vm = this;
                vm.inside = "This is inside the directive";
            },
            controllerAs: 'vm',
            template: "{{vm.inside}}"
        };
    }

    function beautifulDirective() {

        var controller = function () {

            var vm = this;
            
            vm.addItem = function () {
                alert("AddItem");
            };
            
        };

        var template = '<button ng-click="vm.addItem()">Add Item</button>' +
            '<ul><li ng-repeat="item in vm.datasource">{{ ::item }}</li></ul>';

        return {
            restrict: 'EA',
            scope: { },
            controller: controller,
            controllerAs: 'vm',
            bindToController: {
                datasource: '='
            },
            template: template
        };
    }


    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController)
        .controller("secondController", secondController)
        .controller("thirdController", thirdController)
        .directive("mySecondDirective", myDirective2)
        .directive("isolatedScopeDirective", isolatedScopeDirective)
        .directive("isolatedScopeDirectiveWithController", isolatedScopeDirectiveWithController)
        .directive("isolatedScopeDirectiveWithLink", isolatedScopeDirectiveWithLink)
        .directive("beautifulDirective", beautifulDirective)
        .directive("myDirective", myDirective);

} ());