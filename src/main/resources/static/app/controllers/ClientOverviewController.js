'use strict';

angular.module('appController').controller('ClientOverviewController', function ($scope, $location, ClientService, $state) {

    $scope.GetGridData = function (options) {
        return ClientService.getGrid(options);
    };

    $scope.goToAddClient = function () {
        $state.go('^.Add');
    };

    $scope.goToEditClient = function () {
        $state.go('^.Edit', { 'id': $scope.selectedRowId });
    };
});