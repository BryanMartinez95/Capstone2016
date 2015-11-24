package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ClientModel;
import environmentalDataLogging.services.ClientService;
import java.util.UUID;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Client")
public class ClientController
{
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {
        ClientService clientService = new ClientService();
        clientService.delete(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update(ClientModel model)
    {
        ClientService clientService = new ClientService();
        clientService.update(model);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public void get(@PathVariable("id") UUID id)
    {
        ClientService clientService = new ClientService();
        clientService.findOne(id);
    }
}
