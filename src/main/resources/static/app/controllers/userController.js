'use strict';

angular.module('app')

    .controller('UserOverviewController', function ($scope) {
        $scope.data.message = "User Overview Page";
    })

    .controller('UserAddController', function ($scope) {
        $scope.data.message = "User Add Page";
    })

    .controller('UserEditController', function ($scope) {
        $scope.data.message = "User Edit Page";
    });