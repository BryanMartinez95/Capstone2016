package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.views.SampleModel;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

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

	public UUID findUUIDByLabId(String labId)
	{
		return repository.findByLabId(labId).getId();
	}
}
