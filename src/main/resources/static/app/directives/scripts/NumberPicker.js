'use strict';

myApp.directive('saitNumberPicker', function NumberPicker(){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/number-picker.html',
        scope: {
            value: '=value'
        },
        link: function(scope, element, attrs) {
            scope.title = attrs.title || '';
            scope.symbolLeft = attrs.symbolleft == true;
            scope.symbol = attrs.symbol || '';
            scope.placeholder = attrs.placeholder || scope.title;
            scope.name = attrs.name || scope.value;
            scope.isInteger = attrs.isinteger  === true;
            var symbolSize = attrs.symbolsize || 50;
            var width = attrs.width || 200;

            if (scope.isInteger) {
                scope.step = attrs.step || 1;
            } else {
                scope.step = 'any';
            }

            if (scope.symbol) {
                width -= symbolSize;
            }
            scope.width = { width: width + 'px'};
        }
    }
});
