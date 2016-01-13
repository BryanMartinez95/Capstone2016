'use strict';

angular.module('app').directive('saitTextbox', function(utils){
    return {
        restrict:'E',
        templateUrl:'directives/templates/textbox.html',
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
            scope.style = utils.appendStyling(styles,scope.style);
            scope.type = type;
            scope.placeholder = placeholder;
        }
    }
});