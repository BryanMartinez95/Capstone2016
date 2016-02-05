'use strict';

/**
 * All the options that appear in the Single Select that are hard-coded.
 */
angular.module('appModel').factory('SingleSelect', function(Enum) {
    return {
        Status: [
            { display: Enum.Status.Active.display, value: Enum.Status.Active.value},
            { display: Enum.Status.Inactive.display, value: Enum.Status.Inactive.value}
        ],
        GridSize: [
            { display: 10, value: 10 },
            { display: 20, value: 20 },
            { display: 50, value: 50 },
            { display: 100, value: 100 }
        ],
        RoleType: [
            { display: Enum.RoleType.User.display, value: Enum.RoleType.User.value },
            { display: Enum.RoleType.Admin.display, value: Enum.RoleType.Admin.value }
        ]
    }
});

