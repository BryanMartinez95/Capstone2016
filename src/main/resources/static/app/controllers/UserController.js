'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User',
    function($scope, UserService) {

        $scope.data.user = {};

        $scope.data.testId = "9ccedbee-1883-440b-b343-4aeed99d9138";

        loadNewData();

        $scope.getUser = getUser($scope.data.testId);

        $scope.createUser = create($scope.data);

        $scope.remove = remove($scope.data.testId);

        function create(data) {
            UserService.remove(data)
                .then(
                    loadNewData()
                )
        }

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

        function remove(id) {
            UserService.remove(id)
                .then(loadNewData());
        }
    }]);