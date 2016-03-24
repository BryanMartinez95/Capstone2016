package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.models.views.SampleModel;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Sample service provides all of the required methods for the sample controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class SampleService extends CrudService<Sample, SampleModel> implements ISampleService
{
	@Autowired
	ISampleRepository repository;

	@Override
	public SampleModel findOne(UUID id)
	{
		Sample sample = repository.findOne(id);
		SampleModel model = new SampleModel();
		model.setId(sample.getId());
		model.setLabId(sample.getLabId());
		model.setSampleIdentifier(sample.getSampleIdentifier());
//		Set<Measurement> measurements = sample.getMeasurements();
//
//		for (Measurement measurement : measurements)
//		{
//			measurement.setSample(null);
//		}
//
//		model.setMeasurements(measurements);

		model.setDate(sample.getDate());
		model.setStatus(sample.getStatus());
		model.setComment(sample.getComment());
		model.setDeviceId(sample.getDevice().getId());

		if(sample.getProject() != null)
		{
			model.setProjectId(sample.getProject().getId());
		}

		return model;
	}

	public GridResultModel<ProjectModel> getGridList(GridRequestModel gridRequestModel)
	{
		List<FilterModel> filters = gridRequestModel.getFilters();
		List<SortModel> sorts = gridRequestModel.getSorts();
		List<String> ignoredColumns = gridRequestModel.getIgnoredColumns();

		int pageSize = gridRequestModel.getPageSize();
		int currentPage = gridRequestModel.getCurrentPage();

		GridResultModel<ProjectModel> gridResultModel = new GridResultModel<>();
		List<SampleModel> models = new ArrayList<>();

		List<Sample> entities = repository.findAll().stream()
				.sorted((sample1, sample2) -> sample1.getDate().compareTo(sample2.getDate()))
				.collect(Collectors.toList());

		for (Sample sample : entities)
		{
			SampleModel model = new SampleModel();
			model.setId(sample.getId());
			model.setLabId(sample.getLabId());
			model.setMeasurements(null);
			model.setDate(sample.getDate());
			model.setStatus(sample.getStatus());
			model.setComment(sample.getComment());
			model.setDeviceId(sample.getDevice().getId());

			if(sample.getProject() != null)
			{
				model.setProjectId(sample.getProject().getId());
			}

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
}
