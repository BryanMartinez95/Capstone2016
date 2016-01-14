'use strict';

angular.module('app').controller('UserController', function($scope, User, UserService){

    $scope.data.user = {};
    var user = new User();

    $scope.createUser = function() {
        user.firstName = $scope.data.firstName;
        user.lastName = $scope.data.lastName;
        user.email = $scope.data.email;
        user.status = $scope.data.status;
        user.password = $scope.data.password;
        user.roleType = $scope.data.roleType;
        UserService.create(user);
    };

    $scope.getUser = function() {
        var guy = UserService.get('admin@gmail.com');
        console.log(guy);
    };
});