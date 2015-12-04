package environmentalDataLogging.services;

import environmentalDataLogging.models.ImportModel;

/**
 * The Import Service saves the imported data to the database.
 */
public class ImportService extends BaseService
{
    /**
     * Import Sample - Saves the imported data to the database.  The data comes into the service
     * as an ImportModel, and is converted to a Sample entity and saved
     *
     * @param model the model is the sample data to be saved
     */
    public void importSample(ImportModel model)
    {

    }
}
