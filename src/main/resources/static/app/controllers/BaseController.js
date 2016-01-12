'use strict';

/**
 * Base controller for the entire application.
 */
app.controller('BaseController', function($scope,UserModel){
    $scope.data = {};
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

    /*** Sample model creation **/
    var user = {
        id:1,
        firstName:"Cameron",
        lastName:"McNaught",
        email:"cam@gmail.com",
        status:"Active",
        roleType:"Wizard"
    };
    $scope.data.user = UserModel.newUser(user);
    console.log($scope.data.user);
});
