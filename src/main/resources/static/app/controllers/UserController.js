'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel', 'SingleSelect',
    function($scope, UserService, User, GridRequestModel, SingleSelect) {

        $scope.data = {};
        $scope.data.statusOptions = SingleSelect.Status;
        $scope.data.roleTypeOptions = SingleSelect.RoleType;

        //Test user data
        var testUser = {
            id: "00000000-0000-0000-0000-000000000000",
            firstName: "Alec",
            lastName: "Wassill",
            email: "alec@gmail.com",
            status: $scope.data.statusOptions[0],
            password: "password",
            roleType: $scope.data.roleTypeOptions[0]
        };

        var emptyUser = {
            id: "00000000-0000-0000-0000-000000000000",
            firstName: "",
            lastName: "",
            email: "",
            status: $scope.data.statusOptions[0],
            password: "",
            roleType: $scope.data.roleTypeOptions[0]
        };

        $scope.data.user = emptyUser;

        $scope.add = function() {
            $scope.data.user = emptyUser;
            $scope.activeView = $scope.$parent.states[1];
        };

        $scope.cancel = function() {
            $scope.activeView = $scope.$parent.states[0];
        };

        $scope.edit = function() {
            console.log("Selected User", $scope.selectedRow);
            $scope.data.user = {
                id: $scope.selectedRow.id,
                firstName: $scope.selectedRow.firstName,
                lastName: $scope.selectedRow.lastName,
                email: $scope.selectedRow.email,
                password: $scope.selectedRow.password
            };

            if ($scope.selectedRow.status == "ACTIVE") {
                $scope.data.user.status = $scope.data.statusOptions[0];
            }
            else {
                $scope.data.user.status = $scope.data.statusOptions[1];
            }

            if ($scope.selectedRow.roleType == "ADMIN") {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[1];
            }
            else {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[0];
            }

            console.log("$scopeUser", $scope.data.user);
            $scope.activeView = $scope.$parent.states[2];
        };

        $scope.view = function() {
            $scope.activeView = $scope.$parent.states[3];
        };

        $scope.createUser = function() {
            var user = new User.newUser($scope.data.user);
            user.status = user.status.display;
            user.roleType = user.roleType.display;
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


        $scope.GetGridData = function(options){
            return UserService.getGrid(options);
        };
        $scope.multiList = [];
        $scope.multiListOptions = {
            displayField: 'firstName',
            concatToDisplay: ['lastName']
        };
    }]);