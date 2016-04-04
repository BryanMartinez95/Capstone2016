'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name DialogService
 *
 * @param {service} $mdDialog       A service that facilitates the displaying of ngMaterial's dialog boxes
 * @description A service to handle the displaying of dialog boxes.
 */
angular.module('appService').factory('DialogService', function($mdDialog) {

	/**
	 * @property {Function} showDialog      {@link showDialog} for more information
	 * @property {Function} close           {@link close} for more information
	 * @property {Function} error           {@link error} for more information
	 */
	return({
		showDialog: showDialog,
		close: close,
		error: error
	});

	/**
	 * Displays a dialog message with a specified scope, event and template url
	 * @param {object} $scope - the scope of the dialog.
	 * @param {object} $event - the event that launched the dialog.
	 * @param {string} templateUrl - the template url that will be used to populate the dialog.
	 */
	function showDialog($scope, $event, templateUrl) {
		$mdDialog.show({
			scope: $scope,
			templateUrl: templateUrl,
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	}

	/**
	 * Closes any currently open dialogs.
	 */
	function close() {
		$mdDialog.destroy();
	}

	/**
	 * Displays an error dialog with a specified message and event
	 * @param {string} message - the message to be displayed within the dialog.
	 * @param {object} $event - the event that launched the dialog.
	 */
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
