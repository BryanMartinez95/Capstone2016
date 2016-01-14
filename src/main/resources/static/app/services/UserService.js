/**
 * Created by Alec Wassill on 1/13/2016.
 */
'use strict';

angular.module('app').service('UserService', function($resource) {

    return {
        create: function(User) {
            var resource = $resource('/User');
            return resource.save(User);
        },
        update: function(User) {
            var resource = $resource('/', {id: '@id'}, {method: 'PUT'});
            return resource.update(User);
        },
        delete: function(id) {
            var resource = $resource('/{id}', {id: '@id'}, {method: 'DELETE'});
            return resource.delete(id);
        },
        get: function(id) {
            var resource = $resource('/User/{id}', {id: '@id'}, {method: 'GET'});
            return resource.get(id);
        },
        getAll: function() {
            var resource = $resource('/All', {id: '@id'}, {method: 'GET', isArray:true});
            return resource.query();
        }
    }
});