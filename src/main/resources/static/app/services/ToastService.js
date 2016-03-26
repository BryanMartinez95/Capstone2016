'use strict';

angular.module('appService').factory('ToastService', function($mdToast) {
	return({
		success: success,
		error: error
	});

	function success(message, scope) {
		scope.textContent = message;
		$mdToast.show({
			scope: scope,
			templateUrl: 'assets/templates/toast-success.html',
			hideDelay: 5000,
			position: 'top right'
		})
	}

	function error(message, scope) {
		scope.textContent = message;
		$mdToast.show({
			scope: scope,
			templateUrl: 'assets/templates/toast-error.html',
			hideDelay: 5000,
			position: 'top right'
		})
	}
});