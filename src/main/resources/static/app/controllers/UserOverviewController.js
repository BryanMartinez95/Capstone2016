'use strict';

angular.module('appController').controller('UserOverviewController', function ($scope, UserService) {

    $scope.data = {};

    $scope.GetGridData = function (options) {
        return UserService.getGrid(options);
    };
});