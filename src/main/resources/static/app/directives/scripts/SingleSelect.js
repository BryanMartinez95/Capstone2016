'use strict';

/**
 * Structure of the Single Select directive.
 * To access the selected object use: <<object passed to hold value>>.data
 */
angular.module('appDirective').directive('saitSingleSelect', function($http){
    /**
     * Append styling to the object being applied to a ngStyle attribute on a directive.
     * @param {[]} newStyle - Array of all the new styles to be appended to the current styling.
     * @param {object} [currentStyle] - Object containing all the existing styling.
     * @return {object} The new object containing all the old and new styling.
     */
    function appendStyling(newStyle, currentStyle){
        if (!currentStyle) {
            currentStyle = {};
        }
        var key = null;
        var val = null;
        for (var idx = 0; idx < newStyle.length; idx++) {
            if (idx % 2 === 0) {
                key = newStyle[idx];
            } else {
                val = newStyle[idx];
            }
            if (key && val) {
                currentStyle[key] = val;
                key = null;
                val = null;
            }
        }
        return currentStyle;
    }
    return {
        restrict:'E',
        templateUrl:'/app/directives/templates/single-select.html',
        scope:{
            model: '=value',
            disabled: '=',
            change: '&'
        },
        link: function(scope, element, attrs){

            console.log(attrs);

            var title = attrs.title || '';
            var required = attrs.required || false;
            var size = attrs.size || '100%';
            var name = attrs.name; // required
            var placeholder = attrs.placeholder ? attrs.placeholder : title + "...";
            var style = ['width'];
            var isLocalData = attrs.islocal || true;

	        console.log(isLocalData);
            if (isLocalData === "true") {
	            console.log("asdf");
                scope.options = JSON.parse(attrs.options);
            } else {
                var params = attrs.params;
                var apiUrl = params.apiUrl;
                $http({
                    method: 'GET',
                    url: apiUrl
                }).then(function(resp){
                    scope.options = JSON.parse(resp.data);
                })
            }

            if (isNaN(size)) {
                style.push(size);
            } else {
                style.push(size + 'px');
            }

            scope.width = appendStyling(style, scope.width);
            scope.title = title;
            scope.required = required;
            scope.name = name;
            scope.placeholder = placeholder;
        }
    }
});
