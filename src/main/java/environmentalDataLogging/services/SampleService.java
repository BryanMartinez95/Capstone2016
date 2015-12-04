package environmentalDataLogging.services;

import environmentalDataLogging.models.SampleModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Sample service provides all of the required methods for the sample controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class SampleService extends BaseService
{
    /**
     * Delete - Removes the sample from the database by id
     *
     * @param id the id of the sample to be deleted
     */
    public void delete(UUID id)
    {
    }

    /**
     * Update - Updates the sample in the database with the info passed into the method.
     *
     * @param model the model is the view models info to be updated in the database
     */
    public void update(SampleModel model)
    {

    }

    /**
     * FindOne - Finds the sample by id in the database, converts the entity to a view model
     *      and returns the view model to the controller
     *
     * @param id the id of the sample to find
     * @return the sample model is the view model to be returned to the view
     */
    public SampleModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new sample based on the view model passed into the function
     *
     * @param model the model is the sample info to use to create a new entity in the database
     */
    public void create(SampleModel model)
    {

    }

    /**
     * FindAll - Finds and returns all samples from the database.
     *
     * @return the list of samples to return to the controller
     */
    public List<SampleModel> findAll()
    {
        return null;
    }
}
