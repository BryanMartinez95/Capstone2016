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
                   scope.rows = [];
                   scope.headers = [];
                   for (var key in scope.gridData[0]){
                       if (key.toLowerCase().indexOf('id') === -1) {
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
                   for (var row in newVal) {
                       var obj = {};
                       for(var key in newVal[row]) {
                           if (key.toLowerCase().indexOf('id') === -1) {
                               obj[key] = newVal[row][key];
                           }
                       }
                       scope.rows.push(obj);
                   }
                   element.innerHTML = "";
                   setResize();
               }
           });

           scope.showFilterDiv = function() {

           };

           scope.hideFilterDiv = function() {

           };


       }
   }
});