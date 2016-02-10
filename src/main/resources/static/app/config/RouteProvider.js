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
    $urlRouterProvider.when('/Client', '/Client/Grid');

    /**
     * All the states in the app
     */
    $stateProvider
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: 'app/views/dashboard.html',
            controller: 'DashboardController'
        })
        .state('Device', {
            url: '/Device',
            templateUrl: 'app/views/device.html',
            controller: 'DeviceController'
        })
        .state('Project', {
            url: '/Project',
            templateUrl: 'app/views/projects.html',
            controller: 'ProjectController'
        })
        .state('Sample', {
            url: '/Sample',
            templateUrl: 'app/views/sample.html',
            controller: 'SampleController'
        })
        .state('User', {
            url: '/User',
            template: '<div ui-view=""></div>',
            controller: 'UserController',
            abstract: true
        })
        .state('User.Grid', {
            url: '/Grid',
            templateUrl: 'app/views/user.html'
        })
        .state('User.Add', {
            url: '/Add',
            templateUrl: 'app/views/add-user.html'
        })
        .state('User.Edit', {
            url: '/Edit',
            templateUrl: 'app/views/edit-user.html'
        })
        .state('Client', {
            url: '/Client',
            template: '<div ui-view=""></div>',
            controller: 'ClientController',
            abstract: true
        })
        .state('Client.Grid', {
            url: '/Grid',
            templateUrl: 'app/views/client.html'
        })
        .state('Client.Add', {
            url: '/Add',
            templateUrl: 'app/views/add-client.html'
        })
        .state('Client.Edit', {
            url: '/Edit',
            templateUrl: 'app/views/edit-client.html'
        })
});