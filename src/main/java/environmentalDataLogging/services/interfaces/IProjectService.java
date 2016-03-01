package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.ProjectModel;

public interface IProjectService extends ICrudService<Project, ProjectModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
	GridResultModel getAdminGridList(GridRequestModel gridRequestModel);
}
