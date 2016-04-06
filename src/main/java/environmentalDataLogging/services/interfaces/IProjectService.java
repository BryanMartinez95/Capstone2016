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

/**
 * The interface Project service.
 */
public interface IProjectService extends ICrudService<Project, ProjectModel>
{
    /**
     * Gets project list.
     *
     * @return the project list
     */
    List<SelectListModel> getProjectList();

    /**
     * Create and return uuid uuid.
     *
     * @param model the model
     * @return the uuid
     */
    UUID createAndReturnUUID(ProjectModel model);

    /**
     * Report byte [ ].
     *
     * @param id the id
     * @return the byte [ ]
     */
    byte[] report(UUID id);

    /**
     * Export list.
     *
     * @param id the id
     * @return the list
     */
    List<ProjectExportModel> export(UUID id);
}
