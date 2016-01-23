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

           var headers = [];
           JSON.parse(attrs.headers).forEach(function(val, idx, array){
               headers.push(val.headerName);
           });
           scope.headers = headers;
       }
   }
});