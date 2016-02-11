'use strict';

angular.module('appController').controller('UserEditController', function ($scope, $routeParams, UserService) {

    var id = $routeParams.id;

    console.log(id);


    var user = UserService.findOne(id);

    $scope.user.firstName = user.firstName;
    $scope.user.lastName = user.lastName;
    $scope.user.email = user.email;
    $scope.user.password = user.password;

    $scope.edit = function () {
        console.log("Edit Button Pressed");
        var user = new User();

        user.firstName = $scope.user.firstName;
        user.lastName = $scope.user.lastName;
        user.password = $scope.user.password;
        user.email = $scope.user.email;

        console.log(user);

        UserService.update(user);
    };

    $scope.cancel = function () {
        console.log("Cancel Button Pressed");
    };
});