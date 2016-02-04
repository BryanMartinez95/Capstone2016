'use strict';

/**
 * All the enums used in the app.
 */
angular.module('appModel').constant('Enum', {
    Status: {
        Active: {display: "ACTIVE", value: 1},
        Inactive: {display: "INACTIVE", value: 2}
    },
    RoleType: {
        User: {display: "USER", value: 1},
        Admin: {display: "ADMIN", value: 2}
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
    }
});
