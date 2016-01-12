'use strict';

/**
 * Base controller for the entire application.
 */
app.controller('BaseController', function($scope){
    /**
     * Information for the logo.
     */
    $scope.data.logo = {
        url: "assets/img/SAIT_Logo.png",
        alt: "Logo",
        target: "/Main"
    };
    /**
     * Information on the current user.
     */
    $scope.data.currentUser = "Admin";
});
