'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel', 'SingleSelect',
    function($scope, UserService, User, GridRequestModel, SingleSelect) {

        $scope.data = {};
        $scope.data.user = {};

        $scope.data.statusOptions = SingleSelect.Status;
        $scope.data.roleTypeOptions = SingleSelect.RoleType;

        loadNewData();

        $scope.add = function() {
            $scope.activeView = $scope.$parent.states[1];
        };

        $scope.cancel = function() {
            $scope.activeView = $scope.$parent.states[0];
        };

        $scope.removeUser = function() {
            UserService.remove($scope.data.testRemoveId)
                .then(loadNewData());
        };

        $scope.createUser = function() {
            var user = new User($scope.data);
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