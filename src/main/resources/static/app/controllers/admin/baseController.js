'use strict';

angular.module('appController').controller('AdminBaseController', function($scope){

    var activeService = null;

    $scope.getActiveService = function() {
        return activeService;
    };

    $scope.setActiveService = function(service) {
        activeService = service;
    };

    $scope.create = function(model){
        return activeService.create(model);
    };

    $scope.findAll = function() {
        return activeService.findAll();
    };

    $scope.findOne = function(id) {
        return activeService.findOne(id);
    };

    $scope.update = function(data) {
        return activeService.update(data);
    };

    $scope.remove = function(data) {
        return activeService.remove(data);
    };

    $scope.getObjectFromArray = function(value, array) {
        var output = null;
        array.forEach(function(obj){
            if (obj.value === value) {
                output = obj;
            }
        });
        return output;
    }
});