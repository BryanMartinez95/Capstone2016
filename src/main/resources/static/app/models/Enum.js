'use strict';

/**
 * All the enums used in the app.
 */
angular.module('appModel').constant('Enum', {
    Status: {
        New: {display: "New", value: 1},
        Active: {display: "Active", value: 2},
        Inactive: {display: "Inactive", value: 3}
    },
    RoleType: {
        Admin: {display: "Admin", value: 1},
        User: {display: "User", value: 2}
    }
});

