package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.SampleModel;

import java.lang.reflect.InvocationTargetException;
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
    GridResultModel getGridListByProjectId(GridRequestModel gridRequestModel, UUID id) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException;

    /**
     * Gets grid list by device id.
     *
     * @param gridRequestModel the grid request model
     * @param id               the id
     * @return the grid list by device id
     */
    GridResultModel getGridListByDeviceId(GridRequestModel gridRequestModel, UUID id) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException;

    /**
     * Export list.
     *
     * @param exportRequestModel the export request model
     * @return the list
     */
    List<SampleExportModel> export(ExportRequestModel exportRequestModel) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException;

    /**
     * Assigns a list of samples to a specified project.
     *
     * @param ids the sample ids to assign
     * @param projectId the project to assign them to
     */
    void assignToProject(List<UUID> ids, UUID projectId) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException;
}
