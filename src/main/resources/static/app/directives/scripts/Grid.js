'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
       restrict: 'E',
       templateUrl: 'app/directives/templates/grid.html',
       scope: true,
       link: function(scope, element, attrs) {
           scope.rows = scope.$parent.GetGridData.then(function(resp) {
               scope.rows = resp;
           });
       }
   }
});