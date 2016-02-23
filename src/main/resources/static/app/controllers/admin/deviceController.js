'use strict';

angular.module('appController')

    .controller('AdminDeviceOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Device Overview Page";
    })

    .controller('AdminDeviceEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin Device Edit Page";
        $scope.data.param = $routeParams.Id;
    });