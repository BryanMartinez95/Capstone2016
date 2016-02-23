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
                controller: 'AdminUserOverviewController'
            });

        $routeProvider.when('/Admin/User/Add',
            {
                templateUrl: '/views/admin/user/add.html',
                controller: 'AdminUserAddController'
            });

        $routeProvider.when('/Admin/User/:Id',
            {
                templateUrl: '/views/admin/user/edit.html',
                controller: 'AdminUserEditController'
            });

        // Admin - Clients
        $routeProvider.when('/Admin/Client/Overview',
            {
                templateUrl: '/views/admin/client/overview.html',
                controller: 'AdminClientOverviewController'
            });

        $routeProvider.when('/Admin/Client/Add',
            {
                templateUrl: '/views/admin/client/add.html',
                controller: 'AdminClientAddController'
            });

        $routeProvider.when('/Admin/Client/:Id',
            {
                templateUrl: '/views/admin/client/edit.html',
                controller: 'AdminClientEditController'
            });

        // Admin - Device
        $routeProvider.when('/Admin/Device/Overview',
            {
                templateUrl: '/views/admin/device/overview.html',
                controller: 'AdminDeviceOverviewController'
            });

        $routeProvider.when('/Admin/Device/Add',
            {
                templateUrl: '/views/admin/device/add.html',
                controller: 'AdminDeviceAddController'
            });

        $routeProvider.when('/Admin/Device/:Id',
            {
                templateUrl: '/views/admin/device/edit.html',
                controller: 'AdminDeviceEditController'
            });

        // Admin - Investigator
        $routeProvider.when('/Admin/Investigator/Overview',
            {
                templateUrl: '/views/admin/investigator/overview.html',
                controller: 'AdminInvestigatorOverviewController'
            });

        $routeProvider.when('/Admin/Investigator/Add',
            {
                templateUrl: '/views/admin/investigator/add.html',
                controller: 'AdminInvestigatorAddController'
            });

        $routeProvider.when('/Admin/Investigator/:Id',
            {
                templateUrl: '/views/admin/investigator/edit.html',
                controller: 'AdminInvestigatorEditController'
            });

        // Admin - Project
        $routeProvider.when('/Admin/Project/Overview',
            {
                templateUrl: '/views/admin/project/overview.html',
                controller: 'AdminProjectOverviewController'
            });

        $routeProvider.when('/Admin/Project/Add',
            {
                templateUrl: '/views/admin/project/add.html',
                controller: 'AdminProjectAddController'
            });

        $routeProvider.when('/Admin/Project/:Id',
            {
                templateUrl: '/views/admin/project/edit.html',
                controller: 'AdminProjectEditController'
            });

        // Admin - TestMethod
        $routeProvider.when('/Admin/TestMethod/Overview',
            {
                templateUrl: '/views/admin/testMethod/overview.html',
                controller: 'AdminTestMethodOverviewController'
            });

        $routeProvider.when('/Admin/TestMethod/Add',
            {
                templateUrl: '/views/admin/testMethod/add.html',
                controller: 'AdminTestMethodAddController'
            });

        $routeProvider.when('/Admin/TestMethod/:Id',
            {
                templateUrl: '/views/admin/testMethod/edit.html',
                controller: 'AdminTestMethodEditController'
            });

        // Admin - Unit
        $routeProvider.when('/Admin/Unit/Overview',
            {
                templateUrl: '/views/admin/unit/overview.html',
                controller: 'AdminUnitOverviewController'
            });

        $routeProvider.when('/Admin/Unit/Add',
            {
                templateUrl: '/views/admin/unit/add.html',
                controller: 'AdminUnitAddController'
            });

        $routeProvider.when('/Admin/Unit/:Id',
            {
                templateUrl: '/views/admin/unit/edit.html',
                controller: 'AdminUnitEditController'
            });

        $routeProvider.otherwise({redirectTo: '/Dashboard'});

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });