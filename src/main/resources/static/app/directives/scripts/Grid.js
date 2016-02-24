'use strict';

angular.module('appDirective').directive('saitGrid', function($filter){
    return {
       restrict: 'E',
       templateUrl: '/app/directives/templates/grid.html',
       scope: true,
       controller: 'GridController',
       link: function(scope, element) {

           scope.filterColumnOptions = [];

           scope.filterColumn = {};

           scope.$watch('gridData', function(newVal){
               if (newVal.length > 0) {
                   scope.rows = newVal;
                   scope.headers = [];
                   for (var key in scope.gridData[0]){
                       if (key !== 'id') {
                           scope.headers.push({
                               display: key,
                               sort: null
                           });
                           scope.filterColumnOptions.push({
                               display: $filter('convertCamel')(key),
                               value: key
                           });
                       }
                   }
                   element.innerHTML = "";
               }
           });

           scope.showFilterDiv = function() {

           };

           scope.hideFilterDiv = function() {

           };


       }
   }
});