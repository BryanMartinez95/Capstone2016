'use strict';

/**
 * @ngdoc       directive
 * @memberof    appDirective
 * @name        grid
 */
angular.module('appDirective').directive('grid', function(){
    /**
     * Callback function
     * @param scope     The scope of the directive
     * @param element   The base element of the directive
     * @param attrs     All additional attributes on the directive
     */
    function link(scope, element, attrs) {
        scope.options.multiple = attrs.multiple || false;
    }
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/grid.html',
        controller: 'GridController',
        replace: true,
        link: link
   }
});