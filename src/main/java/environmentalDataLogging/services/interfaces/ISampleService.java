package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.ExportRequestModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SampleExportModel;
import environmentalDataLogging.models.views.SampleModel;

import java.util.List;
import java.util.UUID;

public interface ISampleService extends ICrudService<Sample, SampleModel>
{
    UUID createAndReturnUUID(SampleModel model);

    GridResultModel getGridListByProjectId(GridRequestModel gridRequestModel, UUID id);

    GridResultModel getGridListByDeviceId(GridRequestModel gridRequestModel, UUID id);

    List<SampleExportModel> export(ExportRequestModel exportRequestModel);
}
