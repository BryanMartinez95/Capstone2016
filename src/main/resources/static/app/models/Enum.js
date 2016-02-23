'use strict';

/**
 * All the enums used in the app.
 */
angular.module('appModel').constant('Enum', {
    Status: {
        Active: {display: "Active", value: "ACTIVE"},
        Inactive: {display: "Inactive", value: "INACTIVE"}
    },
    RoleType: {
        User: {display: "User", value: "USER"},
        Admin: {display: "Admin", value: "ADMIN"}
    },
    SortOrder: {
        Ascending: { display: 'Ascending', value: 1 },
        Descending: { display: 'Descending', value: 2 }
    },
    Services: {
        User: { display: 'User', value: 1 },
        Project: { display: 'Project', value: 2 },
        Device: { display: 'Device', value: 3 },
        Sample: { display: 'Sample', value: 4 },
        Investigator: { display: 'Investigator', value: 5 },
        UOM: { display: 'Unit of Measurement', value: 6 }
    },
    FilterType: {
        StartsWith: { display: 'Starts With', value: 1 },
        EndsWith: { display: 'Ends With', value: 2 },
        Contains: { display: 'Contains', value: 3 }
    }
});
