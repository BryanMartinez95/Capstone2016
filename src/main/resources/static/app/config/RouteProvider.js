'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    /**
     * All unknown urls entered in the browser will redirect to /Dashboard
     */
    $urlRouterProvider.otherwise('/Dashboard');

    /**
     * All base admin pages need the following line just changed for
     * their respective uses.
     */
    $urlRouterProvider.when('/User', '/User/Grid');

    /**
     * All the states in the app
     */
    $stateProvider
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: 'app/views/dashboard.html',
            controller: 'DashboardController'
        })
        .state('Devices', {
            url: '/Device',
            templateUrl: 'app/views/device.html',
            controller: 'DeviceController'
        })
        .state('Projects', {
            url: '/Project',
            templateUrl: 'app/views/projects.html',
            controller: 'ProjectController'
        })
        .state('Samples', {
            url: '/Sample',
            templateUrl: 'app/views/sample.html',
            controller: 'SampleController'
        })
        .state('Users', {
            url: '/User',
            template: '<div ui-view=""></div>',
            controller: 'UserController',
            abstract: true
        })
        .state('Users.Grid', {
            url: '/Grid',
            templateUrl: 'app/views/user.html'
        })
        .state('Users.Add', {
            url: '/Add',
            templateUrl: 'app/views/add-user.html'
        })
        .state('Users.Edit', {
            url: '/Edit',
            templateUrl: 'app/views/edit-user.html'
        })
});