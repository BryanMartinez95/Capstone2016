'use strict';

class Unit {
    constructor(id, name) {
        if (!arguments.length) {
            this.id = "00000000-0000-0000-0000-000000000000";
            this.name = null;
        }
        else {

            this.id = id;
            this.name = name;
        }
    }
}