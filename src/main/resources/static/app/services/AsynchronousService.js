'use strict';

angular.module('appService').factory('AsynchronousService', function($http, $q) {

	return({
		resolveApiCalls: resolveApiCalls,
		resolveAsynchOperation: resolveAsynchOperation
	});

	function resolveApiCalls(apiCalls) {
		var deferred = $q.defer();

		$q.all(apiCalls)
			.then(function (results) {
				deferred.resolve(results);
			},
			function (errors) {
				deferred.reject(errors);
			},
			function (updates) {
				deferred.update(updates);
			});

		return deferred.promise;
	}

	function resolveAsynchOperation(operation, parameter) {
		var deferred = $q.defer();

		operation(parameter);

		deferred.resolve();

		return deferred.promise;
	}
});
