'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User',
    function($scope, UserService, User) {

        $scope.data.user = User.newEmptyUser();
        $scope.data.testGetId = "";
        $scope.data.testRemoveId = "";

        $scope.data.buttonTest = function() {
            console.log("Button clicked");
        };

        $scope.add = function() {
            $scope.activeView = $scope.$parent.states[1];
        };

        $scope.cancel = function() {
            $scope.activeView = $scope.$parent.states[0];
        };

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

        $scope.GetGridData = UserService.findAll();
        $scope.multiList = [];
        $scope.multiListOptions = {
            displayField: 'firstName',
            concatToDisplay: ['lastName']
        };
    }]);