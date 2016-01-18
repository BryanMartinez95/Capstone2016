'use strict';

angular.module('app').factory('UserService', ['$resource', 'User', function($resource, User) {

    //return $resource('/User/All', {}, {query: {method:'GET', params:{id:'id'}, isArray:true}});

    return {
        getAll: function() {
            return $resource('/User/All', {}, {method: 'GET', isArray: true});
        },
        get: function(id) {
            return $resource('/User/:id', {}, {method: 'GET', params: {id: '@id'}});
        },
        create: function(User) {
            return $resource('/User/', {}, {method: 'POST', params: {id: '@id'}});
        },
        update: function() {
            return $resource('/User/:id', {}, {method: 'PUT', params: {id: '@id'}});
        },
        delete: function() {
            return $resource('/User/:id', {}, {method: 'DELETE', params: {id: '@id'}});
        }
    };
}]);