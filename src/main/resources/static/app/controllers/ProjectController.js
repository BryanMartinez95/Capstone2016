angular.module('appController').controller('ProjectController', function($scope, UserService) {
    $scope.GetGridData = UserService.findAll();
});