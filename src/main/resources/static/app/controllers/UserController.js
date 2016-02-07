'use strict';

angular.module('appController').controller('UserController', ['$scope', 'UserService', 'User', 'GridRequestModel', 'SingleSelect',
    function($scope, UserService, User, GridRequestModel, SingleSelect) {

        $scope.data = {};
        $scope.data.statusOptions = SingleSelect.Status;
        $scope.data.roleTypeOptions = SingleSelect.RoleType;

        function convertBooleanToStatusString(value) {
            return value ? $scope.data.statusOptions[0].value : $scope.data.statusOptions[1].value;
        }

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

        $scope.add = function() {
            $scope.data.user = testUser;
            $scope.data.isActive = true;
            $scope.$parent.changeView($scope.$parent.states[1]);
        };

        $scope.cancel = function() {
            $scope.$parent.changeView($scope.$parent.states[0]);
        };

        $scope.edit = function() {
            $scope.data.user = {
                id: $scope.selectedRow.id,
                firstName: $scope.selectedRow.firstName,
                lastName: $scope.selectedRow.lastName,
                email: $scope.selectedRow.email,
                status: $scope.selectedRow.status,
                password: $scope.selectedRow.password
            };

            $scope.data.isActive = $scope.selectedRow.status == $scope.data.statusOptions[0].value;

            if ($scope.selectedRow.roleType == $scope.data.roleTypeOptions[1].value) {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[1];
            }
            else {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[0];
            }

            $scope.$parent.changeView($scope.$parent.states[2]);
        };

        $scope.view = function() {
            $scope.$parent.changeView($scope.$parent.states[3]);
        };

        $scope.createUser = function() {
            $scope.data.user.status = convertBooleanToStatusString($scope.data.isActive);
            var user = new User.newUser($scope.data.user);
            user.roleType = user.roleType.value;
            UserService.create(user);
            $scope.$parent.changeView($scope.$parent.states[0]);
        };

        $scope.updateUser = function() {
            $scope.data.user.status = convertBooleanToStatusString($scope.data.isActive);
            var user = new User.newUser($scope.data.user);
            user.roleType = user.roleType.value;
            UserService.update(user);
            $scope.$parent.changeView($scope.$parent.states[0]);
        };

        $scope.GetGridData = function(options){
            return UserService.getGrid(options);
        };
        $scope.multiList = [];
        $scope.multiListOptions = {
            displayField: 'firstName',
            concatToDisplay: ['lastName']
        };
    }]);