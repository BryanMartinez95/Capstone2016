'use strict';

angular.module('appDirective').directive('saitGrid', function($filter){
    function setResize() {
        var options = {};
        options.minWidth = 50;
        options.liveDrag = true;
        options.postbackSafe = true;
        options.fixed = false;

        angular.element(document.querySelector('table')).colResizable();
    }
    function convertToSingleSelect(list) {
        var options = [];
        for (var idx in list) {
            var newObj = {
                display: $filter('convertCamel')(list[idx].display),
                value: list[idx].display
            };
            options.push(newObj);
        }
        return options;
    }
    return {
       restrict: 'E',
       templateUrl: '/app/directives/templates/grid.html',
       scope: true,
       controller: 'GridController',
       link: function(scope, element, attrs, controller) {
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
                       }
                   }
                   for (var row in newVal) {
                       var obj = {};
                       for(var key in newVal[row]) {
                           obj[key] = {};
                           obj[key].value = (key === 'status' || key === 'roleType') ? $filter('toRegularCase')(newVal[row][key]) : newVal[row][key];
                           obj[key].display = key.toLowerCase().indexOf('id') === -1;
                       }
                       scope.rows.push(obj);
                   }
                   element.innerHTML = "";
                   setResize();
               }
               if (scope.headers.length > 0)
                controller.updateHeaderOptions(convertToSingleSelect(scope.headers));
           });

       }
   }
});