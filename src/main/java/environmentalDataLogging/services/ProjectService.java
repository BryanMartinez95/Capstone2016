package environmentalDataLogging.services;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.grids.ProjectGridModel;
import environmentalDataLogging.models.views.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Project service provides all of the required methods for the project controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ProjectService extends CrudService<Project, ProjectModel, ProjectGridModel, UUID>
{

}
