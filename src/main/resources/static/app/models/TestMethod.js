'use strict';

class TestMethod {
    constructor(id, name, device) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.name = null;
            this.device = new Device();
        }
        else {

            this.id = id;
            this.name = name;
            this.device = device;
        }
    }
}