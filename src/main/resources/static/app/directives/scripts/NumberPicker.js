'use strict';

angular.module('appDirective').directive('saitNumberPicker', function NumberPicker(){
    /**
     * Append styling to the object being applied to a ngStyle attribute on a directive.
     * @param {[]} newStyle - Array of all the new styles to be appended to the current styling.
     * @param {object} [currentStyle] - Object containing all the existing styling.
     * @return {object} The new object containing all the old and new styling.
     */
    function appendStyling(newStyle, currentStyle){
        if (!currentStyle) {
            currentStyle = {};
        }
        var key = null;
        var val = null;
        for (var idx = 0; idx < newStyle.length; idx++) {
            if (idx % 2 === 0) {
                key = newStyle[idx];
            } else {
                val = newStyle[idx];
            }
            if (key && val) {
                currentStyle[key] = val;
                key = null;
                val = null;
            }
        }
        return currentStyle;
    }
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/number-picker.html',
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
