package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ClientModel;
import environmentalDataLogging.models.DeviceModel;
import environmentalDataLogging.services.ClientService;
import java.util.List;
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

    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update(ClientModel model)
    {

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ClientModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") ClientModel model)
    {

    }

    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<ClientModel> delete()
    {
        return null;
    }
}
