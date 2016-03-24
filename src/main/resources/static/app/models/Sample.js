'use strict';

class Sample {
	constructor(id, measurements, labId, sampleIdentifier, date, status, comment, deviceId, projectId) {
		if (!arguments.length) {
			this.id = "00000000-0000-0000-0000-000000000000";
			this.measurements = null;
			this.labId = null;
			this.sampleIdentifier = null;
			this.date = null;
			this.status = null;
			this.comment = null;
			this.deviceId = null;
			this.projectId = null;
		}
		else {
			this.id = id;
			this.measurements = measurements;
			this.labId = labId;
			this.sampleIdentifier = sampleIdentifier;
			this.date = date;
			this.status = status;
			this.comment = comment;
			this.deviceId = deviceId;
			this.projectId = projectId;
		}
	}
}