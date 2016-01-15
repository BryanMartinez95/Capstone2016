'use strict';

angular.module('app').directive('saitMultiSelect', function(){
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
        restrict:'E',
        templateUrl:'app/directives/templates/multi-select.html',
        scope:{
            options: '=',
            value: '=',
            disabled: '='
        },
        link: function(scope, element, attrs){
            var title = attrs.title || '';
            var required = attrs.required || true;
            var size = attrs.size || 250;
            var name = attrs.name; // required
            var placeholder = attrs.placeholder ? attrs.placeholder : title + "...";

            if (placeholder === '...') {
                placeholder = ''
            }
            var style = ['width'];
            style.push(size  + 'px');

            scope.width = appendStyling(style, scope.width);
            scope.title = title;
            scope.required = required;
            scope.name = name;
            scope.placeholder = placeholder;
        }
    }
});

