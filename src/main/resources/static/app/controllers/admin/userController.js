'use strict';

angular.module('appController')

    .controller('AdminUserOverviewController', function ($scope, UserService, $location) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Overview Page";

        $scope.GetGridData = function (options) {
            return UserService.getGrid(options);
        };

        $scope.goToAddUser = function () {
            $location.path("/Admin/User/Add");
        };

        $scope.goToEditUser = function () {
            $location.path("/Admin/User/" + $scope.selectedRowId);
        };
    })

    .controller('AdminUserAddController', function ($scope, UserService, ToastrService, SingleSelect, Enum, $location) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Add Page";

        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.createUser = function () {

            var user = new User();

	        user.firstName = $scope.user.firstName;
	        user.lastName = $scope.user.lastName;
	        user.password = $scope.user.password;
	        user.email = $scope.user.email;
	        user.status = $scope.getStatusValue();
	        user.roleType = $scope.selectedRoleType.value;

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