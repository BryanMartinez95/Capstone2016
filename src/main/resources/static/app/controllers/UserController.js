'use strict';

angular.module('app').controller('UserController', function($scope, UserService){
    return{

        create: function(data) {
            var user = User.newEmptyUser();
            user.firstName = data.fullName.split(" ")[0];
            user.lastName = data.fullName.split(" ")[1];
            user.email = data.email;
            user.status = data.status;
            user.password = data.password;
            user.roleType = data.roleType;

            UserService.create(user);
        }
    }
});