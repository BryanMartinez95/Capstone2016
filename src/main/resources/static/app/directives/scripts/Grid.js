'use strict';

angular.module('app').directive('saitGrid', function(){
   return {
       restrict: 'E',
       templateUrl: 'app/directives/templates/grid.html',
       scope:{
           data: '=',
           headers: '='
       },
       link: function(scope, element, attrs) {
           scope.data = {};
           scope.data.gridOptions = {
               rowData: scope.data,
               columnDefs: scope.headers
           }
       }
   }
});