package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ClientModel;
import environmentalDataLogging.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Client")
public class ClientController
{
    @Autowired
    ClientService clientService;

    //com

    //com

    //com

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
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
