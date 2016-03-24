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


}
