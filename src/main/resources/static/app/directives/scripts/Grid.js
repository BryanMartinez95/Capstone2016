'use strict';

myApp.directive('saitGrid', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/directives/templates/grid.html',
        scope: {},
        link: function(scope, element, attrs) {
            var options = attrs.options;
            scope.options = { data:options };
        }
    }
});
