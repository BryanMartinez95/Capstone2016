'use strict';

angular.module('appService').factory('ToastService', function($mdToast) {
	return({
		success: success,
		error: error
	});

	function success(message) {
		$mdToast.simple()
            .textContent('<md-icon class="fa fa-check fa-2x"></md-icon>' +
                            '<span flex></span> ' +
                            '<strong>' + message + '</strong> ' +
                            '<span flex="50"></span>'
            )
            .theme('green');
	}

	function error(message) {
        $mdToast.simple()
            .textContent('<md-icon class="fa fa-exclamation-triangle fa-2x"></md-icon>' +
                '<span flex></span> ' +
                '<strong>' + message + '</strong> ' +
                '<span flex="50"></span>'
            )
            .theme('red');
	}
});