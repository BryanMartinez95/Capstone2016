package environmentalDataLogging.services;

import environmentalDataLogging.models.ClientModel;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

/**
 * Client service provides all of the required methods for the client controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ClientService extends BaseService
{
    /**
     * Delete - Removes the client from the database by id
     *
     * @param id the id of the client to be deleted
     */
    public void delete(UUID id)
    {
    }

    /**
     * Update - Updates the client in the database with the info passed into the method.
     *
     * @param model the model is the view models info to be updated in the database
     */
    public void update(ClientModel model)
    {

    }

    /**
     * FindOne - Finds the client by id in the database, converts the entity to a view model
     *      and returns the view model to the controller
     *
     * @param id the id of the client to find
     * @return the client model is the view model to be returned to the view
     */
    public ClientModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new client based on the view model passed into the function
     *
     * @param model the model is the client info to use to create a new entity in the database
     */
    public void create(ClientModel model)
    {

    }

    /**
     * FindAll - Finds and returns all clients from the database.
     *
     * @return the list of clients to return to the controller
     */
    public List<ClientModel> findAll()
    {
        return null;
    }
}
