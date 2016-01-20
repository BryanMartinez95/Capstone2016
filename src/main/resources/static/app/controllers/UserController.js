'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UsersService', 'UserService', 'User',
    function($scope, UsersService, UserService, User) {
        $scope.user = {};
        var user = User.newEmptyUser();

        $scope.create = function() {
            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.email = $scope.user.email;
            user.status = $scope.user.status;
            user.password = $scope.user.password;
            user.roleType = $scope.user.roleType;
            UserService.create(user);
        };

        $scope.update = function() {
            $scope.user = UserService.get({email: $scope.user.email}, function() {
                user.firstName = $scope.user.firstName;
                user.lastName = $scope.user.lastName;
                user.email = $scope.user.email;
                user.status = $scope.user.status;
                user.password = $scope.user.password;
                user.roleType = $scope.user.roleType;
                UserService.update(user);
            })
        };

        //$scope.users = UsersService.query();

        $scope.users = UsersService.query();
}]);