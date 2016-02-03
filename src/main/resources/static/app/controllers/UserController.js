'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel',
    function($scope, UserService, User, GridRequestModel) {

        loadNewData();

        $scope.getUser = function() {
            UserService.findOne($scope.data.testGetId)
                .then(
                    function(user) {
                        $scope.data.newUser = user;
                    }
                )
        };

        $scope.removeUser = function() {
            UserService.remove($scope.data.testRemoveId)
                .then(loadNewData());
        };

        $scope.createUser = function() {
            var user = new User("00000000-0000-0000-0000-000000000000", "Josh", "Lynn", "joshlynn79@gmail.com", "ACTIVE", "password", "ADMIN");
            console.log("Before");
            console.log(user);
            UserService.create(user);
        };

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

        $scope.gridOptions = GridRequestModel.newGridRequestModel();
        $scope.GetGridData = UserService.getGrid($scope.gridOptions);
        $scope.multiList = [];
        $scope.multiListOptions = {
            displayField: 'firstName',
            concatToDisplay: ['lastName']
        };
    }]);