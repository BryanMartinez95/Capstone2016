'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel', 'SingleSelect',
    function($scope, UserService, User, GridRequestModel, SingleSelect) {

        $scope.data = {};
        $scope.data.statusOptions = SingleSelect.Status;
        $scope.data.roleTypeOptions = SingleSelect.RoleType;

        //Test user data
        $scope.data.user = {
            id: "",
            firstName: "Alec",
            lastName: "Wassill",
            email: "alec@gmail.com",
            status: $scope.data.statusOptions[0].display,
            password: "password",
            roleType: $scope.data.roleTypeOptions[0].display
        };

        console.log($scope.data.user.status);
        console.log($scope.data.user.roleType);

        $scope.add = function() {
            $scope.activeView = $scope.$parent.states[1];
        };

        $scope.cancel = function() {
            $scope.activeView = $scope.$parent.states[0];
        };

        $scope.edit = function() {
            $scope.activeView = $scope.$parent.states[2];
        };

        $scope.view = function() {
            $scope.activeView = $scope.$parent.states[3];
            console.log($scope.selectedRow.id);
        };

        $scope.createUser = function() {
            var user = new User.newUser($scope.data.user);
            console.log("Before");
            console.log(user);
            UserService.create(user);
        };

        $scope.removeUser = function() {
            UserService.remove($scope.data.user.id)
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

        $scope.gridOptions = GridRequestModel.newGridRequestModel();
        $scope.GetGridData = UserService.getGrid($scope.gridOptions);
        $scope.multiList = [];
        $scope.multiListOptions = {
            displayField: 'firstName',
            concatToDisplay: ['lastName']
        };
    }]);