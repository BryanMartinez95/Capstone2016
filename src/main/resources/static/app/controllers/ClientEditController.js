'use strict';

angular.module('appController').controller('ClientEditController', function ($scope, $state, ToastrService, SingleSelect, Enum) {

    $scope.client = {};
    $scope.isActive = false;    

    $scope.findOne($state.params.id).then(function(resp){
        $scope.client.name = resp.name;
        $scope.client.contact = resp.contact;
        $scope.client.phoneNumber = resp.phoneNumber;
        $scope.client.email = resp.email;
        $scope.client.status = resp.status;
        $scope.client.comment = resp.comment;
    });

    $scope.save = function () {
        var client = new Client();

        client.name = $scope.client.name;
        client.contact = $scope.client.contact;
        client.phoneNumber = $scope.client.phoneNumber;
        client.email = $scope.client.email;
        client.status = $scope.getStatusValue();
        client.comment = $scope.comment;

        $scope.update(client)
            .then(function(resp){
                ToastrService.success('Saved');
            })
            .catch(function(error){
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