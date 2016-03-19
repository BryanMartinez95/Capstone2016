'use strict';

angular.module('appDirective').directive('saitListCollection', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/directives/templates/list-collection.html',
        scope: true,
        transclude: true,
        controller: 'ListCollectionController',
        link: function($scope, elem, attrs, ctrl, trans) {
            //var params = attrs.params;
            //$scope.model = params.model; // The model each row represents
            //$scope.widths = params.widths; // Width of all columns not counting delete, save, and order
            //$scope.options.savedList = params.list;
            //
            //
            //$scope.appendRow = function(){
            //    trans(function(clone){
            //        var text = [];
            //        for (var idx = 1; idx < clone.length; idx+=2) {
            //            text.push(clone[idx]);
            //        }
            //        console.log(text);
            //    });
            //}
        }
    }
});