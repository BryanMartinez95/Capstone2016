'use strict';

/**
 * @ngdoc config
 * @memberof app
 * @params {service} $routeProvider
 * @params {service} $httpProvider
 * @description
 *  Used to specify all the routing used in the application
 */
angular.module('app').config(
    function ($routeProvider, $httpProvider) {

        // Sample
        $routeProvider.when('/Sample',
            {
                templateUrl: '/views/sample/overview.html',
                controller: 'SampleOverviewController',
                auth: true,
                admin: false
            });

        $routeProvider.when('/Sample/0000000-000-000-0000000',
            {
                templateUrl: '/views/sample/add.html',
                controller: 'SampleAddController',
                auth: true,
                admin: false
            });

        $routeProvider.when('/Sample/:Id',
            {
                templateUrl: '/views/sample/edit.html',
                controller: 'SampleEditController',
                auth: true,
                admin: false
            });

        // Project
        $routeProvider.when('/Project',
            {
                templateUrl: '/views/project/overview.html',
                controller: 'ProjectOverviewController',
                auth: true,
                admin: false
            });

        $routeProvider.when('/Project/0000000-000-000-0000000',
            {
                templateUrl: '/views/project/add.html',
                controller: 'ProjectAddController',
                auth: true,
                admin: false
            });

        $routeProvider.when('/Project/:Id',
            {
                templateUrl: '/views/project/edit.html',
                controller: 'ProjectEditController',
                auth: true,
                admin: false
            });

        // Project Sample

        $routeProvider.when('/Project/:ProjectId/Sample/0000000-000-000-0000000',
            {
                    templateUrl: '/views/project/sample/add.html',
                    controller: 'ProjectSampleAddController',
                    auth: true,
                    admin: false
            });

        $routeProvider.when('/Project/:ProjectId/Sample/:SampleId',
            {
                    templateUrl: '/views/project/sample/edit.html',
                    controller: 'ProjectSampleEditController',
                    auth: true,
                    admin: false
            });

        // Device
        $routeProvider.when('/Device',
            {
                templateUrl: '/views/device/overview.html',
                controller: 'DeviceOverviewController',
                auth: true,
                admin: false
            });

        $routeProvider.when('/Device/:Id',
            {
                templateUrl: '/views/device/edit.html',
                controller: 'DeviceEditController',
                auth: true,
                admin: false
            });

        // Admin - Users
        $routeProvider.when('/Admin/User/Overview',
            {
                templateUrl: '/views/admin/user/overview.html',
                controller: 'AdminUserController',
                auth: true,
                admin: true
            });

        // Admin - Clients
        $routeProvider.when('/Admin/Client/Overview',
            {
                templateUrl: '/views/admin/client/overview.html',
                controller: 'AdminClientController',
                auth: true,
                admin: true
            });

        // Admin - Device
        $routeProvider.when('/Admin/Device/Overview',
            {
                templateUrl: '/views/admin/device/overview.html',
                controller: 'AdminDeviceController',
                auth: true,
                admin: true
            });

        // Admin - Investigator
        $routeProvider.when('/Admin/Investigator/Overview',
            {
                templateUrl: '/views/admin/investigator/overview.html',
                controller: 'AdminInvestigatorController',
                auth: true,
                admin: true
            });

        // Admin - Project
        $routeProvider.when('/Admin/Project/Overview',
            {
                templateUrl: '/views/admin/project/overview.html',
                controller: 'AdminProjectController',
                auth: true,
                admin: true
            });

        // Admin - TestMethod
        $routeProvider.when('/Admin/TestMethod/Overview',
            {
                templateUrl: '/views/admin/testMethod/overview.html',
                controller: 'AdminTestMethodController',
                auth: true,
                admin: true
            });

        // Admin - Unit
        $routeProvider.when('/Admin/Unit/Overview',
            {
                templateUrl: '/views/admin/unit/overview.html',
                controller: 'AdminUnitController',
                auth: true,
                admin: true
            });

        //Login
        $routeProvider.when('/Login',
            {
                templateUrl: '/views/login/login.html',
                controller: 'BaseController',
                auth: false,
                admin: false
            });

        $routeProvider.otherwise({redirectTo: '/Project'});

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


    });