'use strict';

class Project {
	constructor(id, projectId, name, startDate, endDate, clients, status, samples, investigatorId, users, comment) {
		if (!arguments.length) {
			this.id = "00000000-0000-0000-0000-000000000000";
			this.projectId = null;
			this.name = null;
			this.startDate = null;
			this.endDate = null;
			this.clients = null;
			this.status = null;
			this.samples = null;
			this.investigatorId = null;
			this.users = null;
			this.comment = null;
		}
		else {
			this.id = id;
			this.projectId = projectId;
			this.name = name;
			this.startDate = startDate;
			this.endDate = endDate;
			this.clients = clients;
			this.status = status;
			this.samples = samples;
			this.investigatorId = investigatorId;
			this.users = users;
			this.comment = comment;
		}
	}
}
