'use strict';

angular.module('appService').factory('SingleSelectService', function($http, $q) {

	return ({
		create: create,
		findAll: findAll,
		findOne: findOne,
		update: update,
		remove: remove,
		getGrid: getGrid
	});

});