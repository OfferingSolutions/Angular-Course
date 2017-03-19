(function () {
    'use strict';

    angular
        .module('AngularJsDemoApp')
        .controller('helloWorldController', helloWorldController);

    helloWorldController.$inject = [];

    function helloWorldController() {
        var ctrl = this;

        ctrl.addItem = function () {
            ctrl.twoway.push(Math.random());
        };
        ctrl.throwEvent = function () {
            ctrl.callback({
                $event: {
                    myMessage: "hey Snoopy"
                }
            });
        };

    }
})();