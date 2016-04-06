'use strict';

/**
 * @ngdoc model
 * @memberof appModel
 * @name Device
 *
 * @description The Device class is a copy to the DeviceModel in the backend.
 * A Device is used by the Environmental Technologies lab to create samples.
 */
class Device {
    constructor(id, name, status, comment) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.name = null;
            this.status = null;
            this.comment = null;
        }
        else {

            this.id = id;
            this.name = name;
            this.status = status;
            this.comment = comment;
        }
    }
}