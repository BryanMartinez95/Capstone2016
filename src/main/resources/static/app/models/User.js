'use strict';

angular.module('app').factory('User',function(){

    function User(id,firstName,lastName,email,status,password,roleType) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.password = password;
        this.roleType = roleType;
    }

    function User() {
        this.id = "00000000-0000-0000-0000-000000000000";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.status = "";
        this.password = "";
        this.roleType = "";
    }

    /**
          * Used to create a new User object.
          * @param {{}} data An object holding all the data for the new model.
          * @returns {User} New User object based on data.
          */
    User.newUser = function(data) {
        return new User(
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.status,
            data.password,
            data.roleType
        );
    };

    User.newEmptyUser = function() {
       return new User();
    };

    /**
      * Return the User model.
      */
    return User;
});