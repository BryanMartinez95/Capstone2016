package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.models.views.MeasurementModel;

import java.util.List;
import java.util.UUID;

/**
 * The interface Measurement service.
 */
public interface IMeasurementService extends ICrudService<Measurement, MeasurementModel>
{
    /**
     * Create and return uuid uuid.
     *
     * @param model the model
     * @return the uuid
     */
    UUID createAndReturnUUID(MeasurementModel model);

    /**
     * Find by sample id list.
     *
     * @param id the id
     * @return the list
     */
    List<MeasurementModel> findBySampleId(UUID id);
}
