'use strict';

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
