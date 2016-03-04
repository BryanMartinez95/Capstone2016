'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/grid.html',
        controller: 'GridController'
   }
});