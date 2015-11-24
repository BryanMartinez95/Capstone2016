package environmentalDataLogging.services;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.ClientModel;
import environmentalDataLogging.repositories.ClientRepository;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;

public class ClientService
{
    @Autowired
    ClientRepository clientRepository;

    public void delete(UUID id)
    {
        clientRepository.delete(id);
    }

    public void update(ClientModel model)
    {
        Client entity = clientRepository.findOne(model.getId());
        // Make Changes
        clientRepository.saveAndFlush(entity);
    }

    public ClientModel findOne(UUID id)
    {
        Client entity = clientRepository.findOne(id);
        return new ClientModel();
    }
}
