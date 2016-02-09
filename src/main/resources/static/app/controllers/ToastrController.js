'use strict';

angular.module('appController').controller('ToastrController', function($scope, toastr){

    $scope.newSuccessToast = function(message, title){
        toastr.success(message, title);
    };

    $scope.newInfoToast = function(message, title){
        toastr.info(message, title);
    };

    $scope.newWarningToast = function(message, title){
        toastr.warning(message, title);
    };

    $scope.newErrorToast = function(){
        toastr.error(message, title);
    };

    $scope.getNumberOfOpenToasts = function() {
        toastr.active();
    };

    $scope.clearAllToasts = function() {
        toastr.clear();
    }
});
