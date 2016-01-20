'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', function($scope, UserService) {

    $scope.data.user = {};
    loadNewData();
    getUser("7c098526-8aa8-4e8e-9c00-496a64fb2f14");

    $scope.create = function() {
        newUser.firstName = $scope.data.user.firstName;
        newUser.lastName = $scope.data.user.lastName;
        newUser.email = $scope.data.user.email;
        newUser.status = $scope.data.user.status;
        newUser.password = $scope.data.user.password;
        newUser.roleType = $scope.data.user.roleType;
        UserService.create(newUser);
    };

    function getUser(id) {
        UserService.findOne(id)
            .then(
                function(user) {
                    $scope.data.newUser = user;
                }
            )
    }

    function applyNewData(users) {
        $scope.data.users = users;
    }

    function loadNewData() {
        UserService.findAll()
            .then(
                function(users) {
                    applyNewData(users);
                }
            );
    }

    console.log($scope.data.newUser);
}]);