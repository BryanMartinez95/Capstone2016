'use strict';

/**
 * @ngdoc model
 * @memberof appModel
 * @name Unit
 *
 * @description The Unit class is a copy to the UnitModel in the backend.
 * A unit represents a list of hardcoded unit of measure within the measurement.
 */
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
