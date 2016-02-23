'use strict';

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/Dashboard',
        {
            templateUrl: 'views/dashboard/overview.html',
            controller: 'DashboardController'
        });

    $routeProvider.when('/',
        {
            templateUrl: 'views/dashboard/overview.html',
            controller: 'DashboardController'
        });

    $routeProvider.when('/Login',
        {
            templateUrl: 'views/login/login.html',
            controller: 'BaseController'
        });

    $routeProvider.when('/Admin/User/Overview',
        {
            templateUrl: 'views/admin/user/overview.html',
            controller: 'UserOverviewController'
        });

    $routeProvider.otherwise({redirectTo: '/Dashboard'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});