'use strict';

/**
 * Base controller for the entire application.
 */
angular.module('app').controller('BaseController', function ($scope,Settings) {
    var info = Settings.get();
    console.log(info);
    $scope.data = {};
    /**
     * Information for the logo.
     */
    $scope.data.logo = {
        url: "assets/img/SAIT_Logo.png",
        alt: "Logo",
        target: "/Main"
    };

    //$scope.data.currentUser = {
    //    fullName: info.currentUser.firstName + ' ' + info.currentUser.lastName,
    //    isAdmin: info.currentUser.isAdmin
    //};
});
