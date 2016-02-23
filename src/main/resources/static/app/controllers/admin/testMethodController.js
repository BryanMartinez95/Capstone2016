'use strict';

angular.module('appController')

    .controller('AdminTestMethodOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin TestMethod Overview Page";
    })

    .controller('AdminTestMethodAddController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin TestMethod Add Page";
    })

    .controller('AdminTestMethodEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin TestMethod Edit Page";
        $scope.data.param = $routeParams.Id;
    });