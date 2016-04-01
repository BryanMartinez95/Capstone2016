package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.ProjectExportModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.MeasurementModel;
import environmentalDataLogging.models.views.ProjectModel;

import java.util.List;
import java.util.UUID;

public interface IProjectService extends ICrudService<Project, ProjectModel>
{
    List<SelectListModel> getProjectList();

    UUID createAndReturnUUID(ProjectModel model);

    byte[] report(UUID id);

    List<ProjectExportModel> export(UUID id);
}
