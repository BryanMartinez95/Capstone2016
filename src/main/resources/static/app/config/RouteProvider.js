'use strict';

/**
 * This file will all the views to their respective controllers.
 */
app.config(function($routeProvider){
    $routeProvider.when('/Dashboard',{
        templateUrl: "views/dashboard.html",
        controller: "controllers/DashboardController.js"
    });
});
