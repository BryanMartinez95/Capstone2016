package environmentalDataLogging.services;

import environmentalDataLogging.models.LocationModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Location service provides all of the required methods for the location controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class LocationService extends BaseService
{
    /**
     * Delete - Removes the location from the database by id
     *
     * @param id the id of the location to be deleted
     */
    public void delete(UUID id)
    {
    }

    /**
     * Update - Updates the location in the database with the info passed into the method.
     *
     * @param model the model is the view models info to be updated in the database
     */
    public void update(LocationModel model)
    {

    }

    /**
     * FindOne - Finds the location by id in the database, converts the entity to a view model
     *      and returns the view model to the controller
     *
     * @param id the id of the client to find
     * @return the location model is the view model to be returned to the view
     */
    public LocationModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new location based on the view model passed into the function
     *
     * @param model the model is the location info to use to create a new entity in the database
     */
    public void create(LocationModel model)
    {

    }

    /**
     * FindAll - Finds and returns all locations from the database.
     *
     * @return the list of locations to return to the controller
     */
    public List<LocationModel> findAll()
    {
        return null;
    }
}
