'use strict';

angular.module('appDirective').directive('saitGrid', function(){
    return {
       restrict: 'E',
       templateUrl: 'app/directives/templates/grid.html',
       scope: {},
       link: function(scope, element, attrs) {
           scope.data = {};
           scope.data.gridOptions = {
               columnDefs: [],
               angularCompileRows: true,
               rowData: []
           };

           if (attrs.rows) {
               scope.data.gridOptions.rowData = JSON.parse(attrs.rows).data;
               scope.data.gridOptions.columnDefs = JSON.parse(attrs.headers);
               scope.data.gridOptions.api.refreshView();
           }
           console.log('Grid Options:',scope.data.gridOptions);
       }
   }
});