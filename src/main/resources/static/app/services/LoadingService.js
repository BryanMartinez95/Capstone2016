'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name LoadingService
 *
 * @description A service to handle the initialization and toggling of the loading bar.
 */
angular.module('appService').factory('LoadingService', function() {

	var loadingStatus = false;

	return {
		init: function () {
			return loadingStatus;
		},
		toggle: function () {
			loadingStatus = !loadingStatus;
			return loadingStatus;
		}
	};
});
