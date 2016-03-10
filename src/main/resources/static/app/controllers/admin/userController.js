'use strict';

angular.module('appController')

    .controller('AdminUserOverviewController',function ($scope, UserService, SingleSelect, Enum, usSpinnerService, ToastrService, $timeout, $location, $mdDialog) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "User Overview Page";
        $scope.dialogTitle = '';
        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.goToAddUser = function (event) {
            //$location.path("/Admin/User/Add");
            $scope.dialogTitle = "Add User";
            $mdDialog.show({
                scope: $scope.$new(),
                templateUrl: '/views/admin/user/add.html',
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: false
            }).then(function() {
                console.log('Save', $scope.user);
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };

        $scope.goToEditUser = function () {
            $location.path("/Admin/User/" + $scope.options.selected[0].id);
        };

        $scope.getGrid = function(data) {
            UserService.getGrid(data);
        };

        $scope.data.cancel = function() {
            $mdDialog.cancel();
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
            //$location.path("/Admin/User/Overview");
        };

        function setRoleTypeObject(value) {
            SingleSelect.RoleType.forEach(function (type) {
                if (type.value === value) {
                    $scope.selectedRoleType = type;
                }
            });
        }

        function getBooleanStatus(status) {
            $scope.isActive = status === Enum.Status.Active.value;
        }

        function getStatusValue() {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        }
    })
    .controller('AdminUserAddController', function ($scope, UserService, ToastrService, SingleSelect, Enum, $location, usSpinnerService, $timeout) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Add Page";

        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.createUser = function () {
            usSpinnerService.spin('spinner-1');

            $timeout(function () {

            }, 3000);

            var user = new User();

	        user.firstName = $scope.user.firstName;
	        user.lastName = $scope.user.lastName;
	        user.password = $scope.user.password;
	        user.email = $scope.user.email;
	        user.status = $scope.getStatusValue();
	        user.roleType = $scope.selectedRoleType.value;

            usSpinnerService.stop('spinner-1');

            $scope.create(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });
            $location.path("/Admin/User/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/User/Overview");
        };

        $scope.setRoleTypeObject = function (value) {
            SingleSelect.RoleType.forEach(function (type) {
                if (type.value === value) {
                    $scope.selectedRoleType = type;
                }
            });
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    })

    .controller('AdminUserEditController', function ($scope, $route, $routeParams, UserService, $location, ToastrService, SingleSelect, Enum) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Edit Page";
        $scope.data.param = $routeParams.Id;

        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;
        $scope.user = {};

        $scope.findOne($scope.data.param).then(function (resp) {
            $scope.user.id = resp.id;
            $scope.user.firstName = resp.firstName;
            $scope.user.lastName = resp.lastName;
            $scope.user.email = resp.email;
	        $scope.getBooleanStatus(resp.status);
            $scope.user.password = resp.password;
            $scope.selectedRoleType = $scope.getObjectFromArray(resp.roleType, SingleSelect.RoleType);
        });

        $scope.save = function () {
            var user = new User();

            user.id = $scope.user.id;
            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.password = $scope.user.password;
            user.email = $scope.user.email;
            user.status = $scope.getStatusValue();
            user.roleType = $scope.selectedRoleType.value;

            $scope.update(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });

            $location.path("/Admin/User/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/User/Overview");
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    });