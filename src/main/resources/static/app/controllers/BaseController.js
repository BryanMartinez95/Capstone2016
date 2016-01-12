'use strict';

app.controller('BaseController', function($scope){
    var data = {};
    data.logo = {
        url: "assets/img/SAIT_Logo.png",
        alt: "Logo"
    };
    data.currentUser = "Admin";


    $scope.data = data;
});
