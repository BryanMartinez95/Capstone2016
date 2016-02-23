'use strict';

angular.module('appController').controller('DeviceEditController', function ($scope, $state, ToastrService) {

    $scope.isActive = false;
    $scope.device = {};

    $scope.findOne($state.params.id).then(function(resp){
        $scope.device.id = resp.id;
        $scope.device.name = resp.name;
        $scope.getBooleanStatus(resp.status);
        $scope.device.comment = resp.comment;
    });

    $scope.save = function () {
        var device = new Device();

        device.id = $scope.device.id;
        device.name = $scope.device.name;
        device.status = $scope.getStatusValue();
        device.comment = $scope.device.comment;

        console.log(device);

        $scope.update(device)
            .then(function(resp){
                ToastrService.success('Saved');
            })
            .catch(function(error){
                ToastrService.error('Cannot Save Device', 'Error');
            });

        $state.go('^.Overview');
    };

    $scope.cancel = function () {
        $state.go('^.Overview');
    };

    $scope.getBooleanStatus = function(status) {
        $scope.isActive = status === 0;
    };

    $scope.getStatusValue = function() {
        return $scope.isActive ? 0 : 1;
    };
});