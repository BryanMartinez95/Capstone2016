'use strict';

angular.module('appController').controller('UserAddController', function ($scope, $state, ToastrService) {

    $scope.user = {};
    $scope.test = "asdf";
    $scope.create = function () {

        var user = new User();

        user.firstName = $scope.user.firstName;
        user.lastName = $scope.user.lastName;
        user.password = $scope.user.password;
        user.email = $scope.user.email;

        $scope.createUser(user)
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
