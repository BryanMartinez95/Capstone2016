package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.ProjectModel;

public interface IProjectService extends ICrudService<Project, ProjectModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
