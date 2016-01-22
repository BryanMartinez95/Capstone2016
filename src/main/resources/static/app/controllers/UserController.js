'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User',
    function($scope, UserService, User) {

        $scope.data.user = User.newEmptyUser();
        $scope.data.testGetId = "";
        $scope.data.testRemoveId = "";

        loadNewData();

        $scope.getUser = function() {
            UserService.findOne($scope.data.testGetId)
                .then(
                    function(user) {
                        $scope.data.newUser = user;
                    }
                )
        };

        //$scope.createUser = function() {
        //  UserService.create($scope.data)
        //      .then(
        //          function(result) {
        //              $scope.data.createUserResult = result;
        //          }
        //      )
        //};

        $scope.removeUser = function() {
            UserService.remove($scope.data.testRemoveId)
                .then(loadNewData());
        };

        //function create(data) {
        //    UserService.create(data)
        //        .then(
        //            loadNewData()
        //        )
        //}

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
    }]);