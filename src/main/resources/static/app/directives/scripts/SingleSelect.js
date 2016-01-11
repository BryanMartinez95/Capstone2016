'use strict';

/**
 * Structure of the Single Select directive.
 * To access the selected object use: <<object passed to hold value>>.data
 */
myApp.directive('saitSingleSelect', function(utils){
    return {
        restrict:'E',
        templateUrl:'directives/templates/single-select.html',
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
