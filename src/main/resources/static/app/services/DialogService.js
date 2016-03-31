'use strict';

angular.module('appService').factory('DialogService', function($mdDialog) {

	return({
		showDialog: showDialog,
		close: close,
		error: error
	});

	function showDialog($scope, $event, templateUrl) {
		$mdDialog.show({
			scope: $scope,
			templateUrl: templateUrl,
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	}

	function close() {
		$mdDialog.destroy();
	}

	function error(message, $event) {
		$mdDialog.show(
			$mdDialog.alert($event)
				.parent(angular.element(document.body))
				.clickOutsideToClose(false)
				.title('Error!')
				.textContent(message)
				.ariaLabel('Error!')
				.ok('OK')
				.targetEvent($event)
		);
	}
});
