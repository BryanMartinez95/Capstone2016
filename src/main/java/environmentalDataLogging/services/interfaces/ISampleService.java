package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.SampleModel;

public interface ISampleService extends ICrudService<Sample, SampleModel>
{
}
