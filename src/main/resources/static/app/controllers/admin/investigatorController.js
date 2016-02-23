'use strict';

angular.module('appController')

    .controller('AdminInvestigatorOverviewController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Investigator Overview Page";
    })

    .controller('AdminInvestigatorAddController', function ($scope) {
        $scope.data = {};
        $scope.data.message = "Admin Investigator Add Page";
    })

    .controller('AdminInvestigatorEditController', function ($scope, $route, $routeParams) {
        $scope.data = {};
        $scope.data.message = "Admin Investigator Edit Page";
        $scope.data.param = $routeParams.Id;
    });