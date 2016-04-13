'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name AsynchronousService
 *
 * @param {service} $http   A service that facilitates communication with the remote HTTP servers
 * @param {service} $q      A service that helps you run functions asynchronously, and use their return values when they are done processing.
 * @description A service to handle multiple asynchronous API calls or functions.
 */
angular.module('appService').factory('AsynchronousService',
    ['$http', '$q',
        function ($http, $q) {

            /**
             * @property {Function} resolveApiCalls          {@link resolveApiCalls} for more information
             * @property {Function} resolveAsynchOperation   {@link resolveAsynchOperation} for more information
             */
            return ({
                resolveApiCalls: resolveApiCalls,
                resolveAsynchOperation: resolveAsynchOperation
            });

            /**
             * Resolves multiple promise objects and returns the results once they are complete.
             * @param {[]} apiCalls - the array of promises to resolve.
             * @return {object} the results of all the promises once they are complete.
             */
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

            /**
             * Resolves an asynchronous function and returns the result once it is complete.
             * @param {Function} operation - the asynchronous function to resolve.
             * @param {object} parameter - an optional parameter for the function.
             * @return {object} the result of the asynchronous function once it is complete.
             */
            function resolveAsynchOperation(operation, parameter) {
                var deferred = $q.defer();

                operation(parameter);

                deferred.resolve();

                return deferred.promise;
            }
        }]);
