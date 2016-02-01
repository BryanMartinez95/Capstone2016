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
          scope.$parent.$parent.GetGridData.then(function(resp) {
               var data = resp;
               var headers = [];
               /**
                * Set the grid rows to the resp from the server
                */
               scope.rows = data;

               /**
                * Set the grid data locally in the controller to avoid additional
                * database calls on sorting and pagination.
                */
               scope.$parent.gridData = data;

               for (var key in data[0]){
                   headers.push({
                       display: key,
                       sortOrder: scope.$parent.defaultSortOrder
                   });
               }

               scope.headers = headers;
           });

       }
   }
});