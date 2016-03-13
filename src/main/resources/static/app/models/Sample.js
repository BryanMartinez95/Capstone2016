'use strict';

class Sample {
	constructor(id, measurements, labId, date, status, comment, deviceId, deviceName, projectId, projectName) {
		if (!arguments.length) {
			this.id = "00000000-0000-0000-0000-000000000000";
			this.measurements = null;
			this.labId = null;
			this.date = null;
			this.status = null;
			this.comment = null;
			this.deviceId = null;
			this.deviceName = null;
			this.projectId = null;
			this.projectName = null;
		}
		else {
			this.id = id;
			this.measurements = measurements;
			this.labId = labId;
			this.date = date;
			this.status = status;
			this.comment = comment;
			this.deviceId = deviceId;
			this.deviceName = deviceName;
			this.projectId = projectId;
			this.projectName = projectName;
		}
	}
}