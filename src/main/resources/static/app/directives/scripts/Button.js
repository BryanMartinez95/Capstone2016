'use strict';

/**
 * To be tested.
 */
angular.module('app').directive('saitButton', function Button(){
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
        templateUrl: 'app/directives/templates/button.html',
        scope: {
            disabled: '='
        },
        link: function(scope, element, attrs) {
            scope.title = attrs.title || '';
            scope.action = attrs.action;

            var size = attrs.size || 200;
            var form = attrs.parentForm;
            var formAction = attrs.formaction;
            var formMethod = attrs.formmethod;

            element.attr('form', form);
            element.attr('formaction', formAction);
            element.attr('formmethod', formMethod);
            /**
             * Contains all the styles being applied dynamically to the directive.
             * All new entries must conform to a [key,value] format.
             * @type {*[]}
             */
            var styles = ['width',size+'px'];
            scope.width = appendStyling(styles,scope.width);
        }
    }
});
