'use strict';

angular.module('appDirective').directive('saitGrid', function($filter){
    return {
       restrict: 'E',
       templateUrl: '/app/directives/templates/grid.html',
       scope: true,
       link: function(scope, element, attrs) {

           scope.filterColumnOptions = [];

           scope.filterColumn = {};

           scope.$parent.$watch('gridData', function(newVal, oldVal){
               if (newVal.length > 0) {
                   scope.rows = [];
                   scope.headers = [];
                   for (var key in scope.$parent.gridData[0]){
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