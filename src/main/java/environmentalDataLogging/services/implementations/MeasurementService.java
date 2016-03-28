package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.models.views.MeasurementModel;
import environmentalDataLogging.repositories.IMeasurementRepository;
import environmentalDataLogging.services.interfaces.IMeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Measurement service provides all of the required methods for the measurement controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class MeasurementService extends CrudService<Measurement, MeasurementModel> implements IMeasurementService
{
	@Autowired
	IMeasurementRepository repository;

	public List<MeasurementModel> findBySampleId(UUID id)
	{
		List<Measurement> measurements = repository.findBySampleIdOrderByDateAsc(id);
		List<MeasurementModel> models = new ArrayList<>();

		for (Measurement measurement : measurements)
		{
			models.add(modelMapper.map(measurement, modelClass));
		}
		return models;
	}

	public UUID createAndReturnUUID(MeasurementModel model)
	{
		Measurement entity = modelMapper.map(model, entityClass);
		beforeAdd(entity);
		entity = repository.saveAndFlush(entity);
		return entity.getId();
	}

	@Override
	public void delete(UUID id)
	{
		repository.delete(id);
	}
}
