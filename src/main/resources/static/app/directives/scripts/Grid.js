'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/grid.html',
        controller: 'GridController',
        replace: true,
        link: function($scope, elem, attrs) {
            $scope.options.multiple = attrs.multiple || false;
        }
   }
});