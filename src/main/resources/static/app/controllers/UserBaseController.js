'use strict';

angular.module('appController').controller('UserBaseController',function($scope, UserService){

    /**
     * Sets the main service that will be used in all the child controllers
     */
    $scope.setActiveService(UserService);
});
