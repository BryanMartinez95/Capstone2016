'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User',
    function($scope, UserService, User) {
        $scope.user = {};
        var user = User.newEmptyUser();

        $scope.data.user = {};
        loadNewData();
        getUser("21c22277-ef59-4133-8baf-8c95f17132cb");

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