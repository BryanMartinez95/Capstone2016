'use strict';

angular.module('appDirective').directive('saitNumberPicker', function NumberPicker(){
    return {
        restrict: 'E',
        templateUrl: 'app/directives/templates/number-picker.html',
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
            scope.isInline = attrs.isinline || false;
            var symbolSize = attrs.symbolsize || '50px';
            var width = attrs.width || '100%';

            if (scope.isInteger) {
                scope.step = attrs.step || 1;
            } else {
                scope.step = 'any';
            }

            if (scope.symbol) {
                scope.width = 'calc("' + width + ' - ' + symbolSize + '")';
            } else {
                scope.width = width;
            }
        }
    }
});
