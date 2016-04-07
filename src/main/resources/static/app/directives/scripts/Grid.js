'use strict';

/**
 * @ngdoc       directive
 * @memberof    appDirective
 * @name        grid
 */
angular.module('appDirective').directive('grid', function(GridService){
    /**
     * Callback function
     * @param scope     The scope of the directive
     * @param element   The base element of the directive
     * @param attrs     All additional attributes on the directive
     */
    function link(scope, element, attrs) {
        GridService.allowMultiple((attrs.multiple || false));
        GridService.canExport(attrs.export || false);
        GridService.canFilter(attrs.filter || false);
    }
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/grid.html',
        controller: 'GridController',
        replace: true,
        link: link
   }
});