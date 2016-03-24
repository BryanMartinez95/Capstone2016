package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.repositories.IProjectRepository;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Project service provides all of the required methods for the project controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ProjectService extends CrudService<Project, ProjectModel> implements IProjectService
{
    @Autowired
    IProjectRepository repository;

    @Override
    public void delete(UUID id)
    {
        Project project = repository.findOne(id);
        project.setInvestigator(null);
        repository.saveAndFlush(project);
        repository.delete(id);
    }

    public List<SelectListModel> getProjectList()
    {
        List<Project> projects = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Project project : projects)
        {
            models.add(new SelectListModel(project.getName(), project.getId()));
        }

        return models;
    }
}
