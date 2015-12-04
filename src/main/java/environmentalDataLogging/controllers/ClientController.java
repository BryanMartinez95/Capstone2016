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

/**
 * Restful controller class to direct input for client related actions.
 * Capable of handling cases of:
 * Deleting client by id
 * Updating client information
 * Getting client by id
 * Creating a new client
 * Getting all clients
 */
@RestController
@RequestMapping("/Client")
public class ClientController
{
    @Autowired
    ClientService clientService;

    /**
     * Method to delete the client using an id.
     * @param id the client id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    /**
     * Method to update the specified client's information.
     * @param model the client with updated information
     */
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update(ClientModel model)
    {

    }

    /**
     * Method to retrieve the client using an id.
     * @param id client id
     * @return the client model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ClientModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    /**
     * Method to create a client using the information provided by the user.
     * @param model the client model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") ClientModel model)
    {

    }

    /**
     * Method to retrieve all the clients.
     * @return a list of all the client models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<ClientModel> delete()
    {
        return null;
    }
}
