'use strict';

angular.module('appController')

    .controller('AdminUserOverviewController', function ($scope, UserService) {
        $scope.data = {};
        $scope.data.message = "Admin User Overview Page";

        $scope.GetGridData = function (options) {
          return UserService.getGrid(options);
        };


    })

    .controller('AdminUserAddController', function ($scope, UserService, ToastrService, SingleSelect, Enum, $location) {

        $scope.data = {};
        $scope.data.message = "Admin User Add Page";

        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.createUser = function() {

            console.log($scope);

            var user = new User();

            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.password = $scope.user.password;
            user.email = $scope.user.email;

            $scope.create(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });
            $location.path("/Admin/User/Overview");
        };

        $scope.create = function(model){
            return UserService.create(model);
        };

        $scope.cancel = function () {
            $location.path("/Admin/User/Overview");
        };

        $scope.setRoleTypeObject = function(value) {
            SingleSelect.RoleType.forEach(function(type){
                if (type.value === value) {
                    $scope.selectedRoleType = type;
                }
            });
        };

        $scope.getBooleanStatus = function(status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function() {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    })

    .controller('AdminUserEditController', function ($scope, $route, $routeParams, UserService) {
        $scope.data = {};
        $scope.data.message = "Admin User Edit Page";
        $scope.data.param = $routeParams.Id;
    });