'use strict';

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/Dashboard',
        {
            templateUrl: 'app/views/dashboard.html',
            controller: 'DashboardController'
        });

    $routeProvider.when('/Project',
        {
            templateUrl: 'app/views/projects.html',
            controller: 'ProjectController'
        });

    $routeProvider.when('/About',
        {
            templateUrl: 'app/views/about.html',
            controller: 'AboutController'
        });

    $routeProvider.when('/Sample',
        {
            templateUrl: 'app/views/sample.html',
            controller: 'SampleController'
        });

    $routeProvider.when('/Device',
        {
            templateUrl: 'app/views/device.html',
            controller: 'DeviceController'
        });

    $routeProvider.when('/User',
        {
            templateUrl: 'app/views/admin/user/overview.html',
            controller: 'UserOverviewController'
        });

    $routeProvider.when('/User/Overview',
        {
            templateUrl: 'app/views/admin/user/overview.html',
            controller: 'UserOverviewController'
        });

    $routeProvider.when('/User/Add',
        {
            templateUrl: 'app/views/admin/user/add.html',
            controller: 'UserAddController'
        });

    $routeProvider.when('/User/Edit/*',
        {
            templateUrl: 'app/views/admin/user/edit.html',
            controller: 'UserEditController'
        });

    $routeProvider.otherwise({redirectTo: '/Dashboard'})

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
});