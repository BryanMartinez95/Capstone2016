'use strict';

angular.module('appController').controller('UserOverviewController', function ($scope, $location, UserService) {

    $scope.selectedRowId = "";

    $scope.GetGridData = function (options) {
        return UserService.getGrid(options);
    };

    $scope.add = function () {
        $scope.navigateToView('/User/Add/');
    };

    $scope.edit = function () {
        console.log('Edit Button Pressed in Overview Controller');
        console.log('/User/Edit/' + $scope.selectedRowId);
        $location.path('/User/Edit/' + $scope.selectedRowId);
    };
});