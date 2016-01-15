'use strict';

angular.module('app').directive('saitTextarea', function(){
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
        templateUrl: 'app/directives/templates/textarea.html',
        scope:{
            enabled: '=',
            value: '='
        },
        link: function(scope, element, attrs) {
            var title = attrs.title || '';
            var name = attrs.name;
            var width = attrs.width || 100;
            var sizeUnit = attrs.sizeUnit || 'percent';
            var required = attrs.required || false;
            var rows = attrs.rows || 3;
            var placeholder = attrs.placeholder || title;
            var cols = attrs.cols || 10;
            var richText = attrs.richtext || false;
            var styles = ['width'];

            switch(sizeUnit) {
                case 'percent':
                    width = width + '%';
                    break;
                // Default is pixels
                default:
                    width = width + 'px';
            }
            styles.push(width);

            if (!scope.enabled) {
                element.attr('disabled','disabled');
            } else {
                element.removeAttr('disabled');
            }

            scope.title = title;
            scope.cols = cols;
            scope.richText = richText;
            scope.width = appendStyling(styles, scope.width);
            scope.name = name;
            scope.placeholder = placeholder;
            scope.cols = cols;

            if (required){
                element.attr('required','required');
            }

        }
    }
});
