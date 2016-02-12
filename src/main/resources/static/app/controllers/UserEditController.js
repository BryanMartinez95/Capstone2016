'use strict';

angular.module('appController').controller('UserEditController', function ($scope, $state, ToastrService, SingleSelect, Enum) {

    $scope.roleTypeOptions = SingleSelect.RoleType;
    $scope.selectedRoleType = $scope.roleTypeOptions[0];
    $scope.isActive = false;
    $scope.user = {};

    $scope.findOne($state.params.id).then(function(resp){
        $scope.user.firstName = resp.firstName;
        $scope.user.lastName = resp.lastName;
        $scope.user.email = resp.email;
        $scope.user.password = resp.password;
        $scope.selectedRoleType = $scope.getObjectFromArray(resp.roleType, SingleSelect.RoleType);
    });

    $scope.save = function () {
        var user = new User();

        user.firstName = $scope.user.firstName;
        user.lastName = $scope.user.lastName;
        user.password = $scope.user.password;
        user.email = $scope.user.email;
        user.status = $scope.getStatusValue();
        user.roleType = $scope.selectedRoleType.value;

        $scope.update(user)
            .then(function(resp){
                ToastrService.success('Saved');
            })
            .catch(function(error){
                ToastrService.error('Cannot Save User', 'Error');
            });

        $state.go('^.Overview');
    };

    $scope.cancel = function () {
        $state.go('^.Overview');
    };

    $scope.getBooleanStatus = function(status) {
        $scope.isActive = status === Enum.Status.Active.value;
    };

    $scope.getStatusValue = function() {
        return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
    };
});