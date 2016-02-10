package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.ClientModel;
import environmentalDataLogging.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/Api/Client")
public class ClientController
{
	@Autowired
	IClientService service;

	/**
	 * Method to delete the client using an id.
	 *
	 * @param id the client id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") UUID id)
	{
		service.delete(id);
	}

	/**
	 * Method to update the specified client's information.
	 *
	 * @param clientModel the client with updated information
	 */
	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody ClientModel clientModel)
	{
		service.update(clientModel);
	}

	/**
	 * Method to retrieve the client using an id.
	 *
	 * @param id client id
	 * @return the client model associated with the id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ClientModel findOne(@PathVariable("id") UUID id)
	{
		return service.findOne(id);
	}

	/**
	 * Method to create a client using the information provided by the user.
	 *
	 * @param clientModel the client model generated using information by the user
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void create(@RequestBody ClientModel clientModel)
	{
		service.create(clientModel);
	}

	/**
	 * Method to retrieve all the clients.
	 *
	 * @return a list of all the client models
	 */
	@RequestMapping(value = "/All", method = RequestMethod.GET)
	public List<ClientModel> findAll()
	{
		return service.findAll();
	}

	@RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
	public GridResultModel getGrid(@RequestBody GridRequestModel gridRequestModel)
	{
		return service.getGridList(gridRequestModel);
	}
}
