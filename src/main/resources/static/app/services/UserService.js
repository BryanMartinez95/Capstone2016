'use strict';

angular.module('app').service('UserService', ['$http', 'User', '$q', function($http, User, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(User) {

    }

    function findOne(id) {
        //var result = {};
        //$http.get("/User/" + id).success(function (response) {
        //    var user = User.newUser(response);
        //    console.log(user);
        //    return user;
        //}).error(function(response) {
        //    console.log(response);
        //});
        //return result;
        var request = $http({
            method: 'GET',
            url: '/User/' + id,
            params: {
                action: 'GET'
            },
            data: {
                id: id
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        //var result = [];
        //$http.get("/User/All").success(function (response) {
        //    angular.forEach(response, function (row) {
        //        var user = User.newUser(row);
        //        result.push(user);
        //    });
        //}).error(function(response) {
        //});
        //return result;
        var request = $http({
            method: 'GET',
            url: '/User/All',
            params: {
                action: 'GET'
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function update(User) {

    }

    function remove(id) {

    }

    // ---
    // PRIVATE METHODS.
    // ---
    function handleError( response ) {
        if (!angular.isObject( response.data ) || !response.data.message) {
            return( $q.reject( "An unknown error occurred." ) );
        }

        return( $q.reject( response.data.message ) );
    }

    function handleSuccess( response ) {
        return( response.data );
    }
}]);

    //return $resource('/User/All', {}, {query: {method:'GET', isArray:true}});

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