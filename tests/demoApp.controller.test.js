describe('demo', function () {
    beforeEach(module('demoApp'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('customers', function () {
        it('customers array length is 2', function () {
            var $scope = {};
            var controller = $controller('SimpleController', { $scope: $scope });
            expect($scope.customers.length).toBe(2);
        });
    });
});