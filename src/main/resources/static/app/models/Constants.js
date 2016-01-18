'use strict';

/**
 * All the constants used in the Angular App.
 *
 * Each new constant will be it's own object.
 *
 * Any object that is created as a constant is globally available within the app.
 */
/**
 * All the enums used in the app.
 */
angular.module('app').constant('Enum', {
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

/**
 * All the options that appear in the Single Select that are hard-coded.
 */
angular.module('app').service('SingleSelect', function(Enum) {
    return {
        Status: [
            {display: Enum.Status.New.display, value: Enum.Status.New.value},
            {display: Enum.Status.Active.display, value: Enum.Status.Active.value},
            {display: Enum.Status.Inactive.display, value: Enum.Status.Inactive.value}
        ]
    }
});

angular.module('app').constant('UUID', {
    EmptyUuid: '00000000-0000-0000-0000-000000000000'
});