'use strict';

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