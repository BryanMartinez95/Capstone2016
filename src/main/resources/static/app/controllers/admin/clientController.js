'use strict';

angular.module('appController')

    .controller('AdminClientOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Client Overview Page";
    })

    .controller('AdminClientAddController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Client Add Page";
    })

    .controller('AdminClientEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin Client Edit Page";
        $scope.data.param = $routeParams.Id;
    });
