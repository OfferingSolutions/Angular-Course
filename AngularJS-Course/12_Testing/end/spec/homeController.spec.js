describe('homeControllerTests', function () {
    beforeEach(angular.mock.module('AngularJsDemoApp'));
    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('value should be correct', function () {
        var controller = $controller('homeController');
        expect(controller).toBeDefined();
        expect(controller.value).toEqual('My First angular application');
    });

    it('add should add correctly', function () {
        var controller = $controller('homeController');
        expect(controller).toBeDefined();
        expect(controller.add(1, 2)).toEqual(3);
    });
});

describe('homeControllerWithScopeTests', function () {
    beforeEach(angular.mock.module('AngularJsDemoApp'));
    var $scope;

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('homeControllerWithScope', { $scope: $scope });
    }));

    it('value should be correct', function () {
        expect($scope).toBeDefined();
        expect($scope.value).toEqual('My First angular application');
    });

    it('add should add correctly', function () {
        expect($scope).toBeDefined();
        expect($scope.add(1, 2)).toEqual(3);
    });
});