package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.views.ClientModel;
import environmentalDataLogging.repositories.IClientRepository;
import environmentalDataLogging.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Client service provides all of the required methods for the client controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ClientService extends CrudService<Client, ClientModel> implements IClientService
{
	@Autowired
	IClientRepository repository;
}
