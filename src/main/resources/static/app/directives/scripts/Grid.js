'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
       restrict: 'E',
       templateUrl: '/app/directives/templates/grid.html',
       scope: true,
       link: function(scope, element, attrs) {
           scope.$parent.$watch('gridData', function(newVal, oldVal){
               if (newVal.length > 0) {
                   scope.rows = newVal;
                   scope.headers = [];
                   for (var key in scope.$parent.gridData[0]){
                       scope.headers.push({
                           display: key
                       });
                   }
                   element.innerHTML = "";
               }
           });

       }
   }
});