'use strict';

angular.module('appController').controller('DashboardController', function($scope, SingleSelect){
    $scope.data = {};
    $scope.data.test = true;
    $scope.data.dropdownValue = SingleSelect.Status[0];
    $scope.data.selectOptions = SingleSelect.Status;
});
