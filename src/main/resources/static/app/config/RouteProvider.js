'use strict';

angular.module('app').config(
    function ($routeProvider, $httpProvider) {

        //Login
        $routeProvider.when('/Login',
            {
                templateUrl: '/views/login/login.html',
                controller: 'BaseController'
            });

        // Dashboard
        $routeProvider.when('/Dashboard',
            {
                templateUrl: '/views/dashboard/overview.html',
                controller: 'DashboardController'
            });

        $routeProvider.when('/',
            {
                templateUrl: '/views/dashboard/overview.html',
                controller: 'DashboardController'
            });

        // Sample
        $routeProvider.when('/Sample',
            {
                templateUrl: '/views/sample/overview.html',
                controller: 'SampleOverviewController'
            });

        // Project
        $routeProvider.when('/Project',
            {
                templateUrl: '/views/project/overview.html',
                controller: 'ProjectOverviewController'
            });

        // Device
        $routeProvider.when('/Device',
            {
                templateUrl: '/views/device/overview.html',
                controller: 'DeviceOverviewController'
            });


        // Admin - Users
        $routeProvider.when('/Admin/User/Overview',
            {
                templateUrl: '/views/admin/user/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/User/Add',
            {
                templateUrl: '/views/admin/user/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/User/:Id',
            {
                templateUrl: '/views/admin/user/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - Clients
        $routeProvider.when('/Admin/Client/Overview',
            {
                templateUrl: '/views/admin/client/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Client/Add',
            {
                templateUrl: '/views/admin/client/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Client/:Id',
            {
                templateUrl: '/views/admin/client/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - Device
        $routeProvider.when('/Admin/Device/Overview',
            {
                templateUrl: '/views/admin/device/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Device/:Id',
            {
                templateUrl: '/views/admin/device/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - Investigator
        $routeProvider.when('/Admin/Investigator/Overview',
            {
                templateUrl: '/views/admin/investigator/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Investigator/Add',
            {
                templateUrl: '/views/admin/investigator/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Investigator/:Id',
            {
                templateUrl: '/views/admin/investigator/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - Project
        $routeProvider.when('/Admin/Project/Overview',
            {
                templateUrl: '/views/admin/project/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Project/Add',
            {
                templateUrl: '/views/admin/project/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Project/:Id',
            {
                templateUrl: '/views/admin/project/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - TestMethod
        $routeProvider.when('/Admin/TestMethod/Overview',
            {
                templateUrl: '/views/admin/testMethod/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/TestMethod/Add',
            {
                templateUrl: '/views/admin/testMethod/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/TestMethod/:Id',
            {
                templateUrl: '/views/admin/testMethod/edit.html',
                controller: 'AdminBaseController'
            });

        // Admin - Unit
        $routeProvider.when('/Admin/Unit/Overview',
            {
                templateUrl: '/views/admin/unit/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Unit/Add',
            {
                templateUrl: '/views/admin/unit/add.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.when('/Admin/Unit/:Id',
            {
                templateUrl: '/views/admin/unit/edit.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.otherwise({redirectTo: '/Dashboard'});

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });