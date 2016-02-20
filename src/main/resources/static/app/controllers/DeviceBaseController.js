'use strict';

angular.module('appController').controller('DeviceBaseController',function($scope, DeviceService){

    /**
     * Sets the main service that will be used in all the child controllers
     */
    $scope.setActiveService(DeviceService);
});
