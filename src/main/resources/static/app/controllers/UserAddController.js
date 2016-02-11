'use strict';

angular.module('appController').controller('UserAddController', function ($scope, $state, ToastrService, SingleSelect, Enum) {

    $scope.user = {};
    $scope.roleTypeOptions = SingleSelect.RoleType;
    $scope.selectedRoleType = $scope.roleTypeOptions[0];
    $scope.isActive = false;

    var user = new User();

    user.firstName = $scope.user.firstName;
    user.lastName = $scope.user.lastName;
    user.password = $scope.user.password;
    user.email = $scope.user.email;

    $scope.createUser = function() {
        $scope.create(user)
            .then(function (resp) {
                ToastrService.success('Saved');
            })
            .catch(function (error) {
                ToastrService.error('Cannot Save User', 'Error');
            });
        $state.go('^.Overview');
    };

    $scope.cancel = function () {
        $state.go('^.Overview');
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
});
