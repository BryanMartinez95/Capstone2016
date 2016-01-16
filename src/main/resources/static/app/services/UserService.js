/**
 * Created by Alec Wassill on 1/13/2016.
 */
'use strict';

angular.module('app').service('UsersService', function($resource) {
    return $resource('/User/All', {}, {
        query: {method: 'GET', isArray:true},
        create: {method: 'POST'}
    });
});

angular.module('app').service('UserService', function($resource) {
    return $resource('/User/:id', {}, {
        show: {method: 'GET'},
        update: {method: 'PUT', params: {id: '@id'}},
        delete: {method: 'DELETE', params: {id: '@id'}}
    });
});