'use strict';

angular.module('appController').controller('UserOverviewController', function ($scope, $location, UserService) {

    $scope.selectedRowId = "";

    $scope.GetGridData = function (options) {
        return UserService.getGrid(options);
    };

    $scope.add = function () {
        $location.path('/User/Add');
    };

    $scope.edit = function () {
        $location.path('/User/Edit/' + $scope.selectedRowId);
    };
});