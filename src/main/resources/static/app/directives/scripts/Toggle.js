'use strict';

angular.module('appDirective').directive('saitToggle', function(){

    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/toggle.html',
        scope: {
            value: '='
        },
        link: function(scope, element, attrs) {
            scope.trueText = attrs.true || 'True';
            scope.falseText = attrs.false || 'False';
            scope.required = attrs.required || false;
            scope.active = attrs.disabled ? false : true;
            scope.changeValue = function() {
                scope.value = scope.value ? false : true;
            };
            scope.size = attrs.size || '';
            scope.title = attrs.title || null;
            scope.name = attrs.name || 'toggle';
        }
    }
});
