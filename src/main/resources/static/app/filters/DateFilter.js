'use strict';

/**
 * @ngdoc filter
 * @memberof appFilter
 * @name dateFilter
 *
 * @description This filter converts Date objects to a more readable format.
 */
angular.module('appFilter').filter('dateFilter', function () {
	return function (date) {
		if (date instanceof Date && date != null)
			return date.toDateString() + ' ' + date.toLocaleTimeString();
		else
			return date;
	}
});
