'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/Dashboard');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.when('/Admin', '/Dashboard');
    $urlRouterProvider.when('/User', '/User/Overview');

    $stateProvider
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: '/app/views/dashboard.html',
            controller: 'DashboardController'
        })
        .state('Device', {
            url: '/Device',
            templateUrl: '/app/views/device.html',
            controller: 'DeviceController'
        })
        .state('Project', {
            url: '/Project',
            templateUrl: '/app/views/project.html',
            controller: 'ProjectController'
        })
        .state('Sample', {
            url: '/Sample',
            templateUrl: '/app/views/sample.html',
            controller: 'SampleController'
        })
        .state('Admin', {
            url: '/Admin',
            template: '<div ui-view=""></div>',
            abstract: true,
            controller: 'AdminBaseController'
        })
        .state('Admin.Client', {
            url: '/Client',
            template: '<div ui-view=""></div>',
            abstract: true
        })
        .state('Admin.Client.Overview', {
            url: '',
            templateUrl: '/app/views/admin/client/client-overview.html'
        })
        .state('Admin.Client.Add', {
            url: '/Add',
            templateUrl: '/app/views/admin/client/add-client.html'
        })
        .state('Admin.Client.Edit', {
            url: '/Edit/:id',
            templateUrl: '/app/views/admin/client/edit-client.html'
        })
        .state('Admin.User', {
            url: '/User',
            template: '<div ui-view=""></div>',
            abstract: true,
            controller: 'UserBaseController'
        })
        .state('Admin.User.Overview', {
            url: '',
            templateUrl: '/app/views/admin/user/user-overview.html',
            controller: 'UserOverviewController'
        })
        .state('Admin.User.Add', {
            url: '/Add',
            templateUrl: '/app/views/admin/user/add-user.html',
            controller: 'UserAddController'
        })
        .state('Admin.User.Edit', {
            url: '/Edit/:id',
            templateUrl: '/app/views/admin/user/edit-user.html',
            controller: 'UserEditController'
        })
});


//angular.module('app').config(function ($routeProvider, $locationProvider) {
//
//    $routeProvider.when('/Dashboard',
//        {
//            templateUrl: 'app/views/dashboard.html',
//            controller: 'DashboardController'
//        });
//
//    $routeProvider.when('/Project',
//        {
//            templateUrl: 'app/views/projects.html',
//            controller: 'ProjectController'
//        });
//
//    $routeProvider.when('/About',
//        {
//            templateUrl: 'app/views/about.html',
//            controller: 'AboutController'
//        });
//
//    $routeProvider.when('/Sample',
//        {
//            templateUrl: 'app/views/sample.html',
//            controller: 'SampleController'
//        });
//
//    $routeProvider.when('/Device',
//        {
//            templateUrl: 'app/views/device.html',
//            controller: 'DeviceController'
//        });
//
//    $routeProvider.when('/User',
//        {
//            templateUrl: 'app/views/admin/user/overview.html',
//            controller: 'UserOverviewController'
//        });
//
//    $routeProvider.when('/User/Add',
//        {
//            templateUrl: 'app/views/admin/user/add.html',
//            controller: 'UserAddController'
//        });
//
//    $routeProvider.when('/User/Edit/:id',
//        {
//            templateUrl: 'app/views/admin/user/edit.html',
//            controller: 'UserEditController'
//        });
//
//    $routeProvider.otherwise({redirectTo: '/Dashboard'});
//
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    })
//});