'use strict';

/**
 * @ngdoc model
 * @memberof appModel
 * @name Measurement
 *
 * @description The Measurement class is a copy to the MeasurementModel in the backend.
 * A Measurement contains all the information relating to the measurement of a sample.
 */
class Measurement {
	constructor(id, sampleId, value, temperature, testMethodId, unitId, date, status) {
		if (!arguments.length) {
			this.id = "00000000-0000-0000-0000-000000000000";
			this.sampleId = null;
			this.value = null;
			this.temperature = null;
			this.testMethodId = null;
			this.unitId = null;
			this.date = null;
			this.status = null;
		}
		else {
			this.id = id;
			this.sampleId = sampleId;
			this.value = value;
			this.temperature = temperature;
			this.testMethodId = testMethodId;
			this.unitId = unitId;
			this.date = date;
			this.status = status;
		}
	}
}