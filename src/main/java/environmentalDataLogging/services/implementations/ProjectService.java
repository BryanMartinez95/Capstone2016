package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.*;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.repositories.IProjectRepository;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
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


	/*
    @Override
    public ProjectModel findOne(UUID id)
    {
        Project entity = repository.findOne(id);
        if (entity == null)
        {
            throw new ResourceNotFoundException("Id: " + id + " not found.");
        }

        ProjectModel model = new ProjectModel();
        model.setId(entity.getId());
        model.setProjectId(entity.getProjectId());
        model.setName(entity.getName());
        model.setStartDate(entity.getStartDate());
        model.setEndDate(entity.getEndDate());

        Set<Client> clients = entity.getClients();
	    UUID[] clientIds = new UUID[clients.size()];
	    for (int i = 0; i < clients.size(); i++) {
		    if(clients.iterator().hasNext())
		        clientIds[i] = clients.iterator().next().getId();
	    }

        model.setClients(clientIds);

	    Set<User> users = entity.getUsers();
	    UUID[] userIds = new UUID[users.size()];
	    for (int i = 0; i < users.size(); i++) {
		    if(users.iterator().hasNext())
			    userIds[i] = users.iterator().next().getId();
	    }

	    model.setUsers(userIds);

        Set<Sample> samples = entity.getSamples();
        for (Sample sample : samples)
        {
            Device device = sample.getDevice();
            device.setSamples(null);
            sample.setDevice(device);
            sample.setProject(null);
        }

        model.setSamples(samples);
	    model.setStatus(entity.getStatus());
        model.setComment(entity.getComment());

        if(entity.getInvestigator() != null)
        {
	        model.setInvestigatorId(entity.getInvestigator().getId());
	        model.setInvestigatorName(entity.getInvestigator().getName());
        }

        return model;
    }
	*/

    public GridResultModel<ProjectModel> getGridList(GridRequestModel gridRequestModel)
    {
        List<FilterModel> filters = gridRequestModel.getFilters();
        List<SortModel> sorts = gridRequestModel.getSorts();
        List<String> ignoredColumns = gridRequestModel.getIgnoredColumns();

        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<ProjectModel> gridResultModel = new GridResultModel<>();
        List<ProjectModel> models = new ArrayList<>();

        List<Project> entities = repository.findAll().stream()
                .sorted((project1, project2) -> project1.getName().compareToIgnoreCase(project2.getName()))
                .collect(Collectors.toList());

        for (Project entity : entities)
        {
            ProjectModel model = new ProjectModel();
            model.setId(entity.getId());
            model.setProjectId(entity.getProjectId());
            model.setName(entity.getName());
            model.setStartDate(entity.getStartDate());
            model.setEndDate(entity.getEndDate());
	        model.setClients(entity.getClients());
	        model.setUsers(entity.getUsers());

            Set<Sample> samples = entity.getSamples();
            for (Sample sample : samples)
            {
                Device device = sample.getDevice();
                device.setSamples(null);
                sample.setDevice(device);
                sample.setProject(null);
	            sample.setMeasurements(null);
            }

	        model.setSamples(samples);
	        model.setStatus(entity.getStatus());
            model.setComment(entity.getComment());
	        model.setInvestigator(entity.getInvestigator());
            models.add(model);
        }

        PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

        paginatedArrayList.gotoPage(currentPage - 1);

        gridResultModel.setCurrentPage(currentPage);
        gridResultModel.setPageSize(pageSize);
        gridResultModel.setList(paginatedArrayList);
        gridResultModel.setIgnoredColumns(ignoredColumns);
        gridResultModel.setTotalItems(models.size());

        return gridResultModel;
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
