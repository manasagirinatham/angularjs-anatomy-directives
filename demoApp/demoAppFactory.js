var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.factory('simpleFactory', function () {
    var factory = {};
    var customers = [{ name: 'Akhil', city: 'Bengaluru' },
        { name: 'Ankit', city: 'Mumbai' }];
    factory.getCustomers = function () {
        return customers;
    };
    return factory;
});

demoApp.controller('SimpleController', function ($scope,     simpleFactory) {
    $scope.customers = simpleFactory.getCustomers();
});

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/DemoAppView1',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView1.html'})
        .when('/DemoAppView2',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView2.html'})
        .otherwise({ redirectTo: '/' });
});