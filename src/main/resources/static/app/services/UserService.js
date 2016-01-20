'use strict';

angular.module('appService').service('UsersService', function($resource) {
    return $resource('/User/All', {}, {
        query: {method: 'GET', isArray:true},
        create: {method: 'POST'}
    });
});

angular.module('appService').service('UserService', function($resource) {
    return $resource('/User/:id', {}, {
        show: {method: 'GET'},
        update: {method: 'PUT', params: {id: '@id'}},
        delete: {method: 'DELETE', params: {id: '@id'}}
    });
});