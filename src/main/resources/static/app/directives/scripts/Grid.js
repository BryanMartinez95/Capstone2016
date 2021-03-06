'use strict';

/**
 * @ngdoc           directive
 * @memberof        appDirective
 * @name            grid
 * @param {service} A service to perform operations on the grid
 */
angular.module('appDirective').directive('grid',['GridService', function(GridService){
    /**
     * Callback function
     * @param scope     The scope of the directive
     * @param element   The base element of the directive
     * @param attrs     All additional attributes on the directive
     */
    function link(scope, element, attrs) {
        GridService.allowMultiple((attrs.multiple || false));
        GridService.canExport(attrs.export || false);
        GridService.canFilter(attrs.filter);
        scope.inner = attrs.inner || false;
    }
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/grid.html',
        controller: 'GridController',
        replace: true,
        link: link
   }
}]);