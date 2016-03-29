package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.SortType;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.SampleModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Predicate;

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

	public UUID createAndReturnUUID(SampleModel model)
	{
		Sample entity = modelMapper.map(model, entityClass);
		beforeAdd(entity);
		entity = repository.saveAndFlush(entity);
		return entity.getId();
	}

	@SuppressWarnings("unchecked")
	public GridResultModel getGridListByProjectId(GridRequestModel gridRequestModel, UUID id)
	{
		int pageSize = gridRequestModel.getPageSize();
		int currentPage = gridRequestModel.getCurrentPage();

		GridResultModel<SampleModel> gridResultModel = new GridResultModel<>();

		List<SampleModel> models = new ArrayList<>();
		List<Object> entities = new ArrayList<>();

		Comparator<Sample> comparator = setComparator(gridRequestModel.getSortColumn(), entityClass);
		List<Predicate> predicates = setPredicates(gridRequestModel.getFilters(), entityClass);

		repository.findByProjectId(id).stream().sorted(comparator).filter(t -> predicates.stream().allMatch(f -> f.test(t))).forEach(entities::add);

		if (gridRequestModel.getSortType().equals(SortType.DESCENDING))
		{
			Collections.reverse(entities);
		}

		for (Object entity : entities)
		{
			models.add(modelMapper.map(entity, modelClass));
		}

		PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

		paginatedArrayList.gotoPage(currentPage - 1);

		gridResultModel.setCurrentPage(currentPage);
		gridResultModel.setPageSize(pageSize);
		gridResultModel.setData(paginatedArrayList);
		gridResultModel.setTotalItems(models.size());
		gridResultModel.setFilters(gridRequestModel.getFilters());
		gridResultModel.setSortColumn(gridRequestModel.getSortColumn());
		gridResultModel.setSortType(gridRequestModel.getSortType());
		gridResultModel.setIgnoredColumns(gridRequestModel.getIgnoredColumns());

		return gridResultModel;
	}

	@SuppressWarnings("unchecked")
	public GridResultModel getGridListByDeviceId(GridRequestModel gridRequestModel, UUID id)
	{
		int pageSize = gridRequestModel.getPageSize();
		int currentPage = gridRequestModel.getCurrentPage();

		GridResultModel<SampleModel> gridResultModel = new GridResultModel<>();

		List<SampleModel> models = new ArrayList<>();
		List<Object> entities = new ArrayList<>();

		Comparator<Sample> comparator = setComparator(gridRequestModel.getSortColumn(), entityClass);
		List<Predicate> predicates = setPredicates(gridRequestModel.getFilters(), entityClass);

		repository.findByDeviceId(id).stream().sorted(comparator).filter(t -> predicates.stream().allMatch(f -> f.test(t))).forEach(entities::add);

		if (gridRequestModel.getSortType().equals(SortType.DESCENDING))
		{
			Collections.reverse(entities);
		}

		for (Object entity : entities)
		{
			models.add(modelMapper.map(entity, modelClass));
		}

		PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

		paginatedArrayList.gotoPage(currentPage - 1);

		gridResultModel.setCurrentPage(currentPage);
		gridResultModel.setPageSize(pageSize);
		gridResultModel.setData(paginatedArrayList);
		gridResultModel.setTotalItems(models.size());
		gridResultModel.setFilters(gridRequestModel.getFilters());
		gridResultModel.setSortColumn(gridRequestModel.getSortColumn());
		gridResultModel.setSortType(gridRequestModel.getSortType());
		gridResultModel.setIgnoredColumns(gridRequestModel.getIgnoredColumns());

		return gridResultModel;
	}
}
