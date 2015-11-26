package environmentalDataLogging.services;

import environmentalDataLogging.models.ClientModel;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
public class ClientService extends BaseService
{
    public void delete(UUID id)
    {
    }

    public void update(ClientModel model)
    {

    }

    public ClientModel findOne(UUID id)
    {
        return null;
    }

    public void create(ClientModel model)
    {

    }

    public List<ClientModel> findAll()
    {
        return null;
    }
}
