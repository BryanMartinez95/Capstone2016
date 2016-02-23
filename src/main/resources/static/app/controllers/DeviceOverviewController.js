'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, $location, DeviceService, $state) {

    $scope.GetGridData = function (options) {
        return DeviceService.getGrid(options);
    };

    $scope.goToEditDevice = function () {
        $state.go('^.Edit', { 'id': $scope.selectedRowId });
    };
});