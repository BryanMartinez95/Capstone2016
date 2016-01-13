'use strict';

/**
 * This file will all the views to their respective controllers.
 */
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){

    $routeProvider.when('/Dashboard',{
        templateUrl: "app/views/dashboard.html",
        controller: "DashboardController"
    });

    $routeProvider.when('/Projects',{
        templateUrl: "app/views/projects.html",
        controller: "ProjectController"
    });

    $routeProvider.when('/About',{
        templateUrl: "app/views/about.html",
        controller: "AboutController"
    });

    $routeProvider.when('/Users',{
        templateUrl: "app/views/user.html",
        controller: "UserController"
    });

    $routeProvider.when('/Samples',{
        templateUrl: "app/views/sample.html",
        controller: "SampleController"
    });

    $routeProvider.when('/Devices',{
        templateUrl: "app/views/device.html",
        controller: "DeviceController"
    });

    $routeProvider.otherwise({redirectTo: '/Dashboard'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
