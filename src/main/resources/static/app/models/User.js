'use strict';

class User {
    constructor(id, firstName, lastName, email, status, password, roleType) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.status = null;
            this.password = null;
            this.roleType = null;
        }
        else {

            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.status = status;
            this.roleType = roleType;
        }
    }
}

//angular.module('appModel').factory('User',function(){
//
//    function User(id,firstName,lastName,email,status,password,roleType) {
//        this.id = id;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.status = status;
//        this.password = password;
//        this.roleType = roleType;
//    }
//
//    /**
//      * Used to create a new User object.
//      * @param {{}} data An object holding all the data for the new model.
//      * @returns {User} New User object based on data.
//      */
//    User.newUser = function(data) {
//        return new User(
//            data.id,
//            data.firstName,
//            data.lastName,
//            data.email,
//            data.status,
//            data.password,
//            data.roleType
//        );
//    };
//
//    User.newEmptyUser = function () {
//        this.id = null;
//        this.firstName = null;
//        this.lastName = null;
//        this.email = null;
//        this.status = null;
//        this.password = null;
//        this.roleType = null;
//    };
//
//    /**
//      * Return the User model.
//      */
//    return User;
//});