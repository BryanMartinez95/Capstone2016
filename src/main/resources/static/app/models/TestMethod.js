'use strict';

/**
 * @ngdoc model
 * @memberof appModel
 * @name TestMethod
 *
 * @description The TestMethod class is a copy to the TestMethodModel in the backend.
 * A Test Method represents a list of test methods for devices.
 */
class TestMethod {
    constructor(id, name, deviceId, deviceName) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.name = null;
	        this.deviceId = "00000000-0000-0000-0000-000000000000";
            this.deviceName = null;
        }
        else {
            this.id = id;
            this.name = name;
	        this.deviceId = deviceId;
            this.deviceName = deviceName;
        }
    }
}