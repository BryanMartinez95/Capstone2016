package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Client;
import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.ClientModel;
import environmentalDataLogging.repositories.IClientRepository;
import environmentalDataLogging.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<SelectListModel> getClientList()
    {
        List<Client> clients = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Client client : clients)
        {
            models.add(new SelectListModel(client.getName(), client.getId()));
        }

        return models;
    }
}
