'use strict';

/**
 * This file will all the views to their respective controllers.
 */
angular.module('app').config(function($routeProvider){
    $routeProvider.when('/Dashboard',{
        templateUrl: "views/dashboard.html",
        controller: "controllers/DashboardController.js"
    });
    $routeProvider.when('/Project',{
        templateUrl: "views/projects.html",
        controller: "controllers/Projects.js"
    });
});
