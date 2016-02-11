'use strict';

angular.module('appController').controller('UserOverviewController', function ($scope, $location, UserService, $state) {

    $scope.GetGridData = function (options) {
        return UserService.getGrid(options);
    };

    $scope.add = function () {
        $state.go('^.Add');
    };

    $scope.edit = function () {
        $state.go('^.Edit', { 'id': $scope.selectedRowId });
    };
});