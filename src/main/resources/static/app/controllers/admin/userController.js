'use strict';

angular.module('appController')

    .controller('AdminUserController',function ($scope, UserService, SingleSelect, Enum, usSpinnerService, ToastrService, $timeout, $mdDialog) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "User Overview Page";

        $scope.dialogTitle = '';
        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.updateUser = function () {
            var user = new User();

            user.id = $scope.user.id;
            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.password = $scope.user.password;
            user.email = $scope.user.email;
            user.status = getStatusValue();
            user.roleType = $scope.selectedRoleType.value;

            UserService.update(user)
            //$scope.update(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });

            $mdDialog.cancel();
            $scope.options.updateGrid();
        };

        $scope.closeDialog = function () {
            $mdDialog.cancel();
        };

        $scope.goToAddUser = function (event) {
            $scope.dialogTitle = "Add User";
            $mdDialog.show({
                scope: $scope.$new(),
                templateUrl: '/views/admin/user/add.html',
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: false
            });
        };

        $scope.goToEditUser = function (event) {
            $scope.user = $scope.options.selected[0];
            setRoleTypeObject($scope.user.roleType);
            getBooleanStatus($scope.user.status);
            console.log($scope.user);
            $scope.dialogTitle = "Edit User - " + $scope.user.id;

            $mdDialog.show({
                scope: $scope.$new(),
                templateUrl: '/views/admin/user/edit.html',
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: false
            });
        };

        $scope.getGrid = function(data) {
            UserService.getGrid(data);
        };

        $scope.createUser = function () {
            usSpinnerService.spin('spinner-1');

            $timeout(function () {

            }, 3000);

            var user = new User();

            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.password = $scope.user.password;
            user.email = $scope.user.email;
            user.status = getStatusValue();
            user.roleType = $scope.selectedRoleType.value;

            usSpinnerService.stop('spinner-1');

            $scope.create(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });
            $mdDialog.cancel();
            $scope.options.updateGrid();
        };

        function setRoleTypeObject(value) {
            SingleSelect.RoleType.forEach(function (type) {
                console.log("Type Value", type.value.toLowerCase());
	            console.log("Value", value.toLowerCase())
                if (type.value.toLowerCase() === value.toLowerCase()) {
                    $scope.selectedRoleType = type;
                }
            });
        }

        function getBooleanStatus(status) {
            $scope.isActive = status.toLowerCase() === Enum.Status.Active.value.toLowerCase();
        }

        function getStatusValue() {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        }
    });