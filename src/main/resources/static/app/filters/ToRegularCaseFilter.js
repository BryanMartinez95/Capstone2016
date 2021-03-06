'use strict';

/**
 * @ngdoc filter
 * @memberof appFilter
 * @description
 *  Converts uppercase text to capitalized lowercase text
 */
angular.module('appFilter').filter('toRegularCase', function(){
    return function(str) {
        if(typeof str === "string") {
	        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		        return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
	        }).replace(/\s+/g, '');
        }
        else {
	        return str;
        }
    }
});
