'use strict';

/**
 * @ngdoc model
 * @memberof appModel
 * @name Sample
 *
 * @description The Sample class is a copy to the SampleModel in the backend.
 * A Sample represents a result sample the Environmental labs obtains once finished running a experiment
 */
class Sample {
	constructor(id, measurements, labId, sampleIdentifierId, companyName, creationDate, sampleIdentity, date, status, comment, deviceId, deviceName, projectId, projectName) {
		if (!arguments.length) {
			this.id = "00000000-0000-0000-0000-000000000000";
			this.labId = null;
			this.sampleIdentifierId = null;
			this.companyName = null;
			this.creationDate = null;
			this.sampleIdentity = null;
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
			this.labId = labId;
			this.sampleIdentifierId = sampleIdentifierId;
			this.companyName = companyName;
			this.creationDate = creationDate;
			this.sampleIdentity = sampleIdentity;
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