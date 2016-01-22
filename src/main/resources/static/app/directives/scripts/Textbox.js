'use strict';

angular.module('appDirective').directive('saitTextbox', function(){
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
        templateUrl:'app/directives/templates/textbox.html',
        scope:{
            enabled: '=',
            value: '='
        },
        link: function(scope, element, attrs) {
            var title = attrs.title || '';
            var size = attrs.size || 200;
            var type = attrs.type || 'text';
            var required = attrs.required || false;
            var pattern = attrs.pattern;
            var placeholder = attrs.placeholder || attrs.title;
            var styles = [];

            styles.push('width');
            styles.push(size + 'px');

            if (required){
                element.attr('required','required');
            }
            if (pattern) {
                element.attr('pattern',pattern);
            }
            if (!scope.enabled) {
                element.attr('disabled','disabled');
            } else {
                element.removeAttr('disabled');
            }

            scope.title = title;
            scope.style = appendStyling(styles,scope.style);
            scope.type = type;
            scope.placeholder = placeholder;
        }
    }
});