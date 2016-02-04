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

        $scope.data.user = testUser;

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
            console.log("User selected an ready to be displayed");
            console.log($scope.selectedRow);
        };

        $scope.createUser = function() {
            var user = new User.newUser($scope.data.user);
            user.status = user.status.display;
            user.roleType = user.roleType.display;
            UserService.create(user);
        };

        $scope.removeUser = function() {
            UserService.remove(testUser.id)
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