'use strict';

angular.module('appController').controller('UserBaseController',function($scope, UserService, SingleSelect, Enum){

    $scope.roleTypeOptions = SingleSelect.RoleType;
    $scope.selectedRoleType = $scope.roleTypeOptions[0];
    $scope.isActive = false;

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

    $scope.getUser = function(id) {
        return UserService.findOne(id);
    };

    $scope.updateUser = function(model) {
        return UserService.update(model);
    };

    $scope.createUser = function(model) {
        return UserService.create(model);
    }
});
