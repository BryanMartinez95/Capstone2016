'use strict';

angular.module('app').controller('UserController', ['$scope', 'UserService', 'User', function($scope, UserService, User) {
    $scope.data.user = {};
    $scope.data.users = {};
    var newUser = User.newEmptyUser();

    $scope.create = function() {
        newUser.firstName = $scope.data.user.firstName;
        newUser.lastName = $scope.data.user.lastName;
        newUser.email = $scope.data.user.email;
        newUser.status = $scope.data.user.status;
        newUser.password = $scope.data.user.password;
        newUser.roleType = $scope.data.user.roleType;
        UserService.create(newUser);
    };

    $scope.data.users = UserService.getAll();

    //UserService.getAll().$promise.then(function() {
    //    $scope.user = user;
    //    console.log(user);
    //},
    //    function(response) {
    //        console.log(response);
    //    }
    //);
}]);