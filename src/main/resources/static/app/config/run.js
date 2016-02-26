'use strict';

angular.module('app').run(function ($http, $rootScope, $location) {
    $rootScope.$watch(function() { return $location.path(); }, function(newValue, oldValue){
        if ($rootScope.authenticated == false){
            //console.log(newValue);
            //console.log(oldValue);
            $location.path('/Login');
        }
    });
});