'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope) {

    $scope.data = {};
    $scope.data.message = "This is the Project Overview Page";
    $scope.data.selectedValue = {};
    $scope.params = {
        apiUrl: '/Api/Device/SingleSelect'
    }
});