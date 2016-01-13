'use strict';

angular.module('app').directive('saitTextarea', function(utils){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/textarea.html',
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
            scope.width = utils.appendStyling(styles, scope.width);
            scope.name = name;
            scope.placeholder = placeholder;
            scope.cols = cols;

            if (required){
                element.attr('required','required');
            }

        }
    }
});
