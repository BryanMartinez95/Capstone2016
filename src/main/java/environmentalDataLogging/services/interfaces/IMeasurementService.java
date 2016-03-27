package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.models.views.MeasurementModel;

import java.util.List;
import java.util.UUID;

public interface IMeasurementService extends ICrudService<Measurement, MeasurementModel>
{
	UUID createAndReturnUUID(MeasurementModel model);
	List<MeasurementModel> findBySampleId(UUID id);
}
