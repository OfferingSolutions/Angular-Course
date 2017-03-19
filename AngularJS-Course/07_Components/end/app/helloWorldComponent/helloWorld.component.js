(function () {

    'use strict';

    var helloWorld = {
        bindings: {
            stringbinding: '@',
            oneway: '<',
            twoway: '=',
            callback: '&',
        },
        templateUrl: 'app/helloWorldComponent/helloWorld.template.html',
        controller: 'helloWorldController'
    };

    angular
        .module('AngularJsDemoApp')
        .component('helloWorld', helloWorld);
})();