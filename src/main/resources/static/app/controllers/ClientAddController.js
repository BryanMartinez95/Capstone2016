'use strict';

angular.module('appController').controller('ClientAddController', function ($scope, $state, ToastrService, SingleSelect, Enum) {

    $scope.client = {};
    $scope.isActive = false;

    var client = new Client();

    client.name = $scope.client.name;
    client.contact = $scope.client.contact;
    client.phoneNumber = $scope.client.phoneNumber;
    client.email = $scope.client.email;
    client.status = $scope.client.status;
    client.comment = $scope.client.comment;

    $scope.createClient = function() {
        $scope.create(client)
            .then(function (resp) {
                ToastrService.success('Saved');
            })
            .catch(function (error) {
                ToastrService.error('Cannot Save Client', 'Error');
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
