'use strict';

app.constant('Enum', {
    Status: {
        New: { display:"New", value:1 },
        Active: { display:"Active", value:2 },
        Inactive: { display:"Inactive", value:3 }
    }
});
app.constant('SingleSelect', {
    Status: {
        New: { display: Enum.Status.New.display, value: Enum.Status.New.value },
        Active: { display: Enum.Status.Active.display, value: Enum.Status.Active.value },
        Inactive: { display: Enum.Status.Inactive.display, value: Enum.Status.Inactive.value },
    }
});
