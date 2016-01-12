'use strict';

app.factory('User',function(){

    function User(id,firstName,lastName,email,status,roleType) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.roleType = roleType;
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
            data.roleType
        );
    };
    /**
          * Return the User model.
          */
    return User;
});