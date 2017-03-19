(function () {

    "use strict";

    function firstController() {
        var vm = this;
        vm.text = "This comes from the second controller";
        vm.text2 = "This is for the isolated directives....";
    }

    function secondController() {
        var vm = this;
        vm.items = ["Hamburger", "Pommes", "Ketchup"];
        vm.itemstwoway = ["This", "is", "twoway"];

        vm.receiveCallback = function (event) {
            alert(event.myMessage);
        };
    }

    var myComponent = {
        template: '<h4>Hellooooo!</h4>'
    };

    var myComponent2 = {
        template: '<h4>{{$ctrl.text}}</h4>',

        controller: function () {
            this.text = "Hello from Component";
        }
    };

    var isolatedScopeComponent = {
        bindings: {
            givenText: '=text'
        },

        template: "<h4>Isolated: {{$ctrl.givenText}}</h4>",

        controller: function () { }
    };

    var beautifulComponent = {

        controller: function () {
            var vm = this;
            vm.addItem = function () {
                alert("AddItem");
            };
        },
        bindings: {
            twoway: '='
        },
        template: '<button ng-click="$ctrl.addItem()">Add Item</button>' +
        '<ul><li ng-repeat="item in $ctrl.twoway">{{ ::item }}</li></ul>'
    };

    angular
        .module("AngularJsDemoApp")
        .controller("firstController", firstController)
        .controller("secondController", secondController)
        .component("mySecondComponent", myComponent2)
        .component("isolatedScopeComponent", isolatedScopeComponent)
        .component("beautifulComponent", beautifulComponent)
        .component("myComponent", myComponent);
} ());