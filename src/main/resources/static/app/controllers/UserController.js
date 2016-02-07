'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel', 'SingleSelect',
    function($scope, UserService, User, GridRequestModel, SingleSelect) {

        $scope.data = {};
        $scope.data.statusOptions = SingleSelect.Status;
        $scope.data.roleTypeOptions = SingleSelect.RoleType;

        $scope.data.isActive = true;

        var convertBooleanToStatusEnum = function (value) {
            $scope.data.user.status = value ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };

        //Test user data
        var testUser = {
            id: "00000000-0000-0000-0000-000000000000",
            firstName: "Alec",
            lastName: "Wassill",
            email: "alec@gmail.com",
            status: true,
            password: "password",
            roleType: $scope.data.roleTypeOptions[0]
        };

        var emptyUser = {
            id: "00000000-0000-0000-0000-000000000000",
            firstName: "",
            lastName: "",
            email: "",
            status: true,
            password: "",
            roleType: $scope.data.roleTypeOptions[0]
        };

        $scope.data.user = testUser;

        $scope.add = function() {
            $scope.data.user = testUser;
            $scope.activeView = $scope.$parent.states[1];
        };

        $scope.cancel = function() {
            $scope.activeView = $scope.$parent.states[0];
        };

        $scope.edit = function() {
            $scope.data.user = {
                id: $scope.selectedRow.id,
                firstName: $scope.selectedRow.firstName,
                lastName: $scope.selectedRow.lastName,
                email: $scope.selectedRow.email,
                password: $scope.selectedRow.password
            };

            $scope.data.isActive = $scope.selectedRow.status == Enum.Status.Active.value;

            if ($scope.selectedRow.roleType == Enum.RoleType.Admin.value) {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[1];
            }
            else {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[0];
            }

            $scope.activeView = $scope.$parent.states[2];
        };

        $scope.view = function() {
            $scope.activeView = $scope.$parent.states[3];
        };

        $scope.createUser = function() {
            var user = new User.newUser($scope.data.user);
            user.status = convertBooleanToStatusEnum($scope.data.isActive);
            user.roleType = user.roleType.display;
            UserService.create(user)
                .then(
                    $scope.data.user = emptyUser,
                    $scope.activeView = $scope.$parent.states[0]
                );
        };

        $scope.updateUser = function() {
            var user = new User.newUser($scope.data.user);
            user.status = user.status.display;
            user.roleType = user.roleType.display;
            UserService.update(user)
                .then(
                    $scope.data.user = user,
                    $scope.activeView = $scope.$parent.states[0]
                );
        };

        $scope.removeUser = function() {
            UserService.remove($scope.selectedRow.id)
                .then(
                    $scope.data.user = emptyUser,
                    $scope.deselect(),
                    $scope.activeView = $scope.$parent.states[0]
                );
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