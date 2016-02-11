'use strict';

angular.module('appController').controller('UserEditController', function ($scope, $state, ToastrService) {

    $scope.user = {};

    $scope.getUser($state.params.id).then(function(resp){
        $scope.user.firstName = resp.firstName;
        $scope.user.lastName = resp.lastName;
        $scope.user.email = resp.email;
        $scope.user.password = resp.password;
        $scope.setRoleTypeObject(resp.roleType);
    });

    $scope.save = function () {
        var user = new User();

        user.firstName = $scope.user.firstName;
        user.lastName = $scope.user.lastName;
        user.password = $scope.user.password;
        user.email = $scope.user.email;
        user.status = $scope.getStatusValue();
        user.roleType = $scope.selectedRoleType.value;

        $scope.updateUser(user)
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
});