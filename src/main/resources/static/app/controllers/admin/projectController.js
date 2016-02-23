'use strict';

angular.module('appController')

    .controller('AdminProjectOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Project Overview Page";
    })

    .controller('AdminProjectAddController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Project Add Page";
    })

    .controller('AdminProjectEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin Project Edit Page";
        $scope.data.param = $routeParams.Id;
    });