package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.ProjectModel;

import java.util.List;

public interface IProjectService extends ICrudService<Project, ProjectModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
	GridResultModel getAdminGridList(GridRequestModel gridRequestModel);
	List<SelectListModel> getProjectList();
}
