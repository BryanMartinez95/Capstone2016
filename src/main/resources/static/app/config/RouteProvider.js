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

        $routeProvider.when('/Sample/0000000-000-000-0000000',
            {
                templateUrl: '/views/sample/add.html',
                controller: 'SampleAddController'
            });

        $routeProvider.when('/Sample/:Id',
            {
                templateUrl: '/views/sample/edit.html',
                controller: 'SampleEditController'
            });

        // Project
        $routeProvider.when('/Project',
            {
                templateUrl: '/views/project/overview.html',
                controller: 'ProjectOverviewController'
            });

	    $routeProvider.when('/Project/0000000-000-000-0000000',
		    {
			    templateUrl: '/views/project/add-project.html',
			    controller: 'ProjectAddController'
		    });

        $routeProvider.when('/Project/:Id',
            {
                templateUrl: '/views/project/edit-project.html',
                controller: 'ProjectEditController'
            });

	    $routeProvider.when('/Project/Sample/0000000-000-000-0000000',
		    {
			    templateUrl: '/views/project/add-project-sample.html',
			    controller: 'ProjectAddController'
		    });

	    $routeProvider.when('/Project/Sample/:Id',
		    {
			    templateUrl: '/views/project/edit-project-sample.html',
			    controller: 'ProjectEditController'
		    });

        // Device
        $routeProvider.when('/Device',
            {
                templateUrl: '/views/device/overview.html',
                controller: 'DeviceOverviewController'
            });

	    $routeProvider.when('/Device/Sample/0000000-000-000-0000000',
		    {
			    templateUrl: '/views/device/add-device-sample.html',
			    controller: 'DeviceAddController'
		    });

	    $routeProvider.when('/Device/Sample/:Id',
		    {
			    templateUrl: '/views/device/edit-device-sample.html',
			    controller: 'DeviceEditController'
		    });

        // Admin - Users
        $routeProvider.when('/Admin/User/Overview',
            {
                templateUrl: '/views/admin/user/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - Clients
        $routeProvider.when('/Admin/Client/Overview',
            {
                templateUrl: '/views/admin/client/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - Device
        $routeProvider.when('/Admin/Device/Overview',
            {
                templateUrl: '/views/admin/device/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - Investigator
        $routeProvider.when('/Admin/Investigator/Overview',
            {
                templateUrl: '/views/admin/investigator/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - Project
        $routeProvider.when('/Admin/Project/Overview',
            {
                templateUrl: '/views/admin/project/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - TestMethod
        $routeProvider.when('/Admin/TestMethod/Overview',
            {
                templateUrl: '/views/admin/testMethod/overview.html',
                controller: 'AdminBaseController'
            });

        // Admin - Unit
        $routeProvider.when('/Admin/Unit/Overview',
            {
                templateUrl: '/views/admin/unit/overview.html',
                controller: 'AdminBaseController'
            });

        $routeProvider.otherwise({redirectTo: '/'});

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });