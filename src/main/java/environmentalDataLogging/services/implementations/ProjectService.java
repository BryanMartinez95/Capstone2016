package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
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
	
	public GridResultModel<ProjectModel> getGridList(GridRequestModel gridRequestModel)
	{
		List<FilterModel> filters = gridRequestModel.getFilters();
		List<SortModel> sorts = gridRequestModel.getSorts();
		int pageSize = gridRequestModel.getPageSize();
		int currentPage = gridRequestModel.getCurrentPage();
		
		GridResultModel<ProjectModel> gridResultModel = new GridResultModel<>();
		List<ProjectModel> models = new ArrayList<>();
		
		List<Project> entities = repository.findAll().stream()
				.sorted((project1, project2) -> project1.getName().compareToIgnoreCase(project2.getName()))
				.collect(Collectors.toList());
		
		for ( Project entity : entities )
		{
			ProjectModel model = new ProjectModel();
			model.setId(entity.getId());
			model.setProjectId(entity.getProjectId());
			model.setName(entity.getName());
			model.setStartDate(entity.getStartDate());
			model.setEndDate(entity.getEndDate());
			model.setClients(entity.getClients());
			model.setStatus(entity.getStatus());

			Set<Sample> samples = entity.getSamples();
			for ( Sample sample : samples )
			{
				Device device = sample.getDevice();
				device.setSamples(null);
				sample.setDevice(device);
				sample.setProject(null);
			}

			model.setSamples(samples);
			model.setUsers(entity.getUsers());
			model.setComment(entity.getComment());
			model.setInvestigator(entity.getInvestigator());

			models.add(model);
//			models.add(modelMapper.map(entity, ProjectModel.class));
		}
		
		PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);
		
		paginatedArrayList.gotoPage(currentPage - 1);
		
		gridResultModel.setCurrentPage(currentPage);
		gridResultModel.setLastPage(paginatedArrayList.getLastPageNumber());
		gridResultModel.setPageSize(pageSize);
		gridResultModel.setList(paginatedArrayList);
		
		return gridResultModel;
	}
}
