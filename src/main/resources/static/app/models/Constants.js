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
app.constant('Enum', {
    Status: {
        New: { display:"New", value:1 },
        Active: { display:"Active", value:2 },
        Inactive: { display:"Inactive", value:3 }
    }
});

/**
 * All the options that appear in the Single Select that are hard-coded.
 */
app.constant('SingleSelect', {
    Status: {
        New: { display: Enum.Status.New.display, value: Enum.Status.New.value },
        Active: { display: Enum.Status.Active.display, value: Enum.Status.Active.value },
        Inactive: { display: Enum.Status.Inactive.display, value: Enum.Status.Inactive.value },
    }
});
