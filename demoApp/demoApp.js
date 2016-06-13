var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.controller('SimpleController', function ($scope) {
    $scope.customers = [{ name: 'Akhil', city: 'Bengaluru' },
        { name: 'Ankit', city: 'Mumbai' }];
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