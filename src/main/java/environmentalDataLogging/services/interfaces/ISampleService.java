package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.ExportRequestModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SampleExportModel;
import environmentalDataLogging.models.views.SampleModel;

import java.util.List;
import java.util.UUID;

/**
 * The interface Sample service.
 */
public interface ISampleService extends ICrudService<Sample, SampleModel>
{
    /**
     * Create and return uuid uuid.
     *
     * @param model the model
     * @return the uuid
     */
    UUID createAndReturnUUID(SampleModel model);

    /**
     * Gets grid list by project id.
     *
     * @param gridRequestModel the grid request model
     * @param id               the id
     * @return the grid list by project id
     */
    GridResultModel getGridListByProjectId(GridRequestModel gridRequestModel, UUID id);

    /**
     * Gets grid list by device id.
     *
     * @param gridRequestModel the grid request model
     * @param id               the id
     * @return the grid list by device id
     */
    GridResultModel getGridListByDeviceId(GridRequestModel gridRequestModel, UUID id);

    /**
     * Export list.
     *
     * @param exportRequestModel the export request model
     * @return the list
     */
    List<SampleExportModel> export(ExportRequestModel exportRequestModel);
}
