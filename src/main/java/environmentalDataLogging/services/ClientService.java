package environmentalDataLogging.services;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.grids.ClientGridModel;
import environmentalDataLogging.models.views.ClientModel;
import org.springframework.stereotype.Service;

/**
 * Client service provides all of the required methods for the client controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ClientService extends CrudService<Client, ClientModel, ClientGridModel>
{

}
