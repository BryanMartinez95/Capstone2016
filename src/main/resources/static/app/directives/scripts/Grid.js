'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
       restrict: 'E',
       templateUrl: 'app/directives/templates/grid.html',
       scope: true,
       link: function(scope, element, attrs) {
           /**
            * Access the controller immediately preceeding the GridController that
            * has a $http service call.
            */
           scope.rows = scope.$parent.$parent.GetGridData.then(function(resp) {
               scope.rows = resp;
           });
       }
   }
});