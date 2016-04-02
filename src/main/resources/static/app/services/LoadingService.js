'use strict';

angular.module('appService').factory('LoadingService', function() {

	return ({
		toggle: toggle
	});

	var loadingStatus = false;

	function toggle() {
		return !loadingStatus;
	}
});
