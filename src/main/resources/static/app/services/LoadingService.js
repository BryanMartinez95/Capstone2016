'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name LoadingService
 *
 * @description A service to handle the status and toggling of the loading bar.
 */
angular.module('appService').factory('LoadingService', function() {

	var loadingStatus = false;

	return {
		getStatus: function () {
			return loadingStatus;
		},
		activate: function () {
			loadingStatus = true;
			return loadingStatus;
		},
		deactivate: function () {
			loadingStatus = false;
			return loadingStatus;
		}
	};
});
