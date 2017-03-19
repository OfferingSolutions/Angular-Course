describe('homeServiceTests', function () {
    beforeEach(angular.mock.module('AngularJsDemoApp'));
    homeService = {};
    $httpBackend = {};

    beforeEach(inject(function (_homeService_, _$httpBackend_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        homeService = _homeService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', inject(function (homeService) {
        expect(homeService).toBeDefined();
    }));

    it('should implementent a getData function', inject(function (homeService) {
        expect(homeService.getData).toBeDefined();
    }));

    it('should call $http.get in get', inject(function (homeService, $http) {
        spyOn($http, 'get');
        homeService.getData();
        expect($http.get).toHaveBeenCalled();
    }));

    it('values from service should be correct', inject(function (homeService, $httpBackend) {
        var responseData;

        $httpBackend.when('GET', 'http://foodapi4demo.azurewebsites.net/api/').respond(200, []);

        homeService.getData().then(function (response) {
            responseData = response.data;
        });

        $httpBackend.flush();
        
        expect(responseData).toEqual([]);
    }));
});