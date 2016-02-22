'use strict';

class Client {
    constructor(id, name, contact, phoneNumber, email, status, comment) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.name = null;
            this.contact = null;
            this.phoneNumber = null;
            this.email = null;
            this.status = null;
            this.comment = null;
        }
        else {

            this.id = id;
            this.name = name;
            this.contact = contact;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.status = status;
            this.comment = comment;
        }
    }
}

//angular.module('appModel').factory('Client', function() {
//
//    function Client(id,name,contact,phoneNumber,email,status,comment) {
//        this.id = id;
//        this.name = name;
//        this.contact = contact;
//        this.phoneNumber = phoneNumber;
//        this.email = email;
//        this.status = status;
//        this.comment = comment;
//    }
//
//    /**
//      * Used to create a new Client object.
//      * @param {{}} data An object holding all the data for the new model.
//      * @returns {Client} New Client object based on data.
//      */
//    Client.newClient = function(data) {
//        return new Client(
//            data.id,
//            data.name,
//            data.contact,
//            data.phoneNumber,
//            data.email,
//            data.status,
//            data.comment
//        );
//    };
//
//    /**
//      * Return the Client model.
//      */
//    return Client;
//});