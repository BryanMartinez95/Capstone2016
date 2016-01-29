package environmentalDataLogging.services;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.grids.SampleGridModel;
import environmentalDataLogging.models.views.SampleModel;
import org.springframework.stereotype.Service;

/**
 * Sample service provides all of the required methods for the sample controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class SampleService extends CrudService<Sample, SampleModel, SampleGridModel>
{

}
