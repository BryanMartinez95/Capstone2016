'use strict';

angular.module('app').directive('directiveDetail', function($http, utils){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/directive-template.html',
        link: function(scope, element, attrs) {
            var directive = utils.jsonToObj(attrs.directive);
            scope.id = directive.id;
            scope.title = directive.title;
            scope.description = directive.description;
            scope.restrictions = directive.restrictions;
            scope.sampleUrl = directive.code.sample;
            scope.information = directive.information;

            if (directive.code.sample) {
                $http.get(directive.code.sample).then(function (response) {
                    scope.displaySampleCode = response.data;
                });
            }
            if (directive.code.script) {
                $http.get(directive.code.script).then(function (response) {
                    scope.displayScriptCode = response.data;
                });
            }
            if (directive.code.html) {
                $http.get(directive.code.html).then(function (response) {
                    scope.displayHtmlCode = response.data;
                });
            }

        }
    }
});
