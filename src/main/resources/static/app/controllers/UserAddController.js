'use strict';

angular.module('appController').controller('UserAddController', function ($scope, UserService) {

    $scope.user = {};
    $scope.test = "asdf";

    $scope.create = function () {

        var user = new User();

        user.firstName = $scope.user.firstName;
        user.lastName = $scope.user.lastName;
        user.password = $scope.user.password;
        user.email = $scope.user.email;

        console.log("Create Button Pressed");
        console.log(user);

        UserService.create(user);
    };

    $scope.cancel = function () {
        console.log("Cancel Button Pressed");
    };
});
