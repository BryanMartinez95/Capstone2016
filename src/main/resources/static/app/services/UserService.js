'use strict';

angular.module('app').factory('UserService', ['$resource', 'User', function($resource, User) {

    return $resource('/User/All', {}, {query: {method:'GET', isArray:true}});

    //console.log("ok");
    //return $resource('/User/:id', {}, {method: 'GET', params: {id: '@id'}});

    //return {
    //    getAll: function() {
    //        console.log("Get all users function in User Service reached.");
    //        return $resource('/User/All', {}, {method: 'GET', isArray:true});
    //    },
    //    get: function(id) {
    //        console.log("Get user function in User Service reached.");
    //        return $resource('/User/:id', {}, {method: 'GET', params: {id: '@id'}});
    //    },
    //    create: function(User) {
    //        console.log("Create user function in User Service reached.");
    //        return $resource('/User/', {}, {method: 'POST', params: {id: '@id'}});
    //    },
    //    update: function() {
    //        console.log("Update user function in User Service reached.");
    //        return $resource('/User/:id', {}, {method: 'PUT', params: {id: '@id'}});
    //    },
    //    delete: function() {
    //        console.log("Delete user function in User Service reached.");
    //        return $resource('/User/:id', {}, {method: 'DELETE', params: {id: '@id'}});
    //    }
    //};
}]);