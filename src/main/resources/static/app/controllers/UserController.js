'use strict';

angular.module('appController').controller('UserController', function($scope, UserService, User, GridRequestModel, SingleSelect) {

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
            //$scope.$parent.chang/eView('userAdd');
            //$state.go('^.Add', {});
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

            if ($scope.selectedRow.roleType == $scope.data.roleTypeOptions[1].display) {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[1];
            }
            else {
                $scope.data.user.roleType = $scope.data.roleTypeOptions[0];
            }
        };

        $scope.createUser = function() {
            $scope.data.user.status = convertBooleanToStatusString($scope.data.isActive);
            var user = new User.newUser($scope.data.user);
            user.roleType = user.roleType.value;
            UserService.create(user);
        };

        $scope.updateUser = function() {
            $scope.data.user.status = convertBooleanToStatusString($scope.data.isActive);
            var user = new User.newUser($scope.data.user);
            user.roleType = user.roleType.value;
            UserService.update(user);
        };

        $scope.removeUser = function() {
            UserService.remove($scope.selectedRow.id)
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

        $scope.title = 'Add User'
    });