'use strict';

angular.module('appController').controller('ClientBaseController',function($scope, ClientService){

    /**
     * Sets the main service that will be used in all the child controllers
     */
    $scope.setActiveService(ClientService);
});
