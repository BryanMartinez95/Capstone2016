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
                controller: 'DashboardController',
                auth: true
            });

        $routeProvider.when('/',
            {
                templateUrl: '/views/dashboard/overview.html',
                controller: 'DashboardController',
                auth: true
            });

        // Sample
        $routeProvider.when('/Sample',
            {
                templateUrl: '/views/sample/overview.html',
                controller: 'SampleOverviewController',
                auth: true
            });

        $routeProvider.when('/Sample/0000000-000-000-0000000',
            {
                templateUrl: '/views/sample/add.html',
                controller: 'SampleAddController',
                auth: true
            });

        $routeProvider.when('/Sample/:Id',
            {
                templateUrl: '/views/sample/edit.html',
                controller: 'SampleEditController',
                auth: true
            });

        // Project
        $routeProvider.when('/Project',
            {
                templateUrl: '/views/project/overview.html',
                controller: 'ProjectOverviewController',
                auth: true
            });

	    $routeProvider.when('/Project/0000000-000-000-0000000',
		    {
			    templateUrl: '/views/project/add.html',
			    controller: 'ProjectAddController',
                auth: true
		    });

        $routeProvider.when('/Project/:Id',
            {
                templateUrl: '/views/project/edit.html',
                controller: 'ProjectEditController',
                auth: true
            });

        // Device
        $routeProvider.when('/Device',
            {
                templateUrl: '/views/device/overview.html',
                controller: 'DeviceOverviewController',
                auth: true
            });
	    
	    $routeProvider.when('/Device/:Id',
		    {
			    templateUrl: '/views/device/edit.html',
			    controller: 'DeviceEditController',
                auth: true
		    });

        // Admin - Users
        $routeProvider.when('/Admin/User/Overview',
            {
                templateUrl: '/views/admin/user/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - Clients
        $routeProvider.when('/Admin/Client/Overview',
            {
                templateUrl: '/views/admin/client/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - Device
        $routeProvider.when('/Admin/Device/Overview',
            {
                templateUrl: '/views/admin/device/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - Investigator
        $routeProvider.when('/Admin/Investigator/Overview',
            {
                templateUrl: '/views/admin/investigator/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - Project
        $routeProvider.when('/Admin/Project/Overview',
            {
                templateUrl: '/views/admin/project/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - TestMethod
        $routeProvider.when('/Admin/TestMethod/Overview',
            {
                templateUrl: '/views/admin/testMethod/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        // Admin - Unit
        $routeProvider.when('/Admin/Unit/Overview',
            {
                templateUrl: '/views/admin/unit/overview.html',
                controller: 'AdminBaseController',
                auth: true
            });

        $routeProvider.otherwise({redirectTo: '/'});

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });