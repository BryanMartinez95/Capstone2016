/**
 * Created by Alec Wassill on 1/13/2016.
 */
'use strict';

angular.module('app').factory('UserService', function($resource) {
    var resource = $resource('*APICall*', {id: '@id'});

    return {
        save: function(User) {
            return resource.save({User});
        },
        update: function() {

        },
        delete: function() {

        },
        get: function(id) {
            return resource.get(id);
        }
    }
});