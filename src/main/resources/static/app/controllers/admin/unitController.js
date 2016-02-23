'use strict';

angular.module('appController')

    .controller('AdminUnitOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Unit Overview Page";
    })

    .controller('AdminUnitAddController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Unit Add Page";
    })

    .controller('AdminUnitEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin Unit Edit Page";
        $scope.data.param = $routeParams.Id;
    });