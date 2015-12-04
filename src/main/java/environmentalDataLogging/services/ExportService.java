package environmentalDataLogging.services;

import environmentalDataLogging.models.ExportModel;
import java.util.UUID;
import org.springframework.stereotype.Service;

/**
 * The Export Service exports the data from the database to an export model
 */
@Service
public class ExportService extends BaseService
{
    /**
     * Export Project - Exports data based on a project
     *
     * @param id the id of the project to be exported
     * @return the export model holds the result to be returned to the calling controller
     */
    public ExportModel exportProject(UUID id)
    {
        return null;
    }

    /**
     * Export Device - Exports data based on a device
     *
     * @param id the id of the device to be exported
     * @return the export model holds the result to be returned to the calling controller
     */
    public ExportModel exportDevice(UUID id)
    {
        return null;
    }
}
