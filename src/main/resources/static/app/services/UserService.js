/**
 * Created by Alec Wassill on 1/13/2016.
 */
'use strict';

angular.module('app').service('UserService', function($resource) {

    return {
        create: function(User) {
            var resource = $resource('/User', {id: '@id'});
            return resource.save(User);
        },
        update: function(User) {
            var resource = $resource('*APICall*', {id: '@id'});
            return resource.update(User);
        },
        delete: function(id) {
            var resource = $resource('*APICall*', {id: '@id'});
            return resource.delete(id);
        },
        get: function(id) {
            var resource = $resource('*APICall*', {id: '@id'});
            return resource.get(id);
        },
        getAll: function() {
            var resource = $resource('*APICall*', {id: '@id'});
            return resource.get();
        }
    }
});