'use strict';

angular.module('app').controller('ProjectController', function($scope, UsersService) {
    $scope.data = {};
    $scope.data.gridInfo = {};
    $scope.data.gridInfo.users = UsersService.query();

    //data.gridInfo.columns =
    //$scope.data = data;
});