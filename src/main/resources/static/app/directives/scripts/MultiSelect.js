'use strict';

angular.module('app').directive('saitMultiSelect', function(utils){
    return {
        restrict:'E',
        templateUrl:'directives/templates/multi-select.html',
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

            scope.width = utils.appendStyling(style, scope.width);
            scope.title = title;
            scope.required = required;
            scope.name = name;
            scope.placeholder = placeholder;
        }
    }
});

