package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.ClientModel;
import environmentalDataLogging.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<?> delete(@PathVariable("id") UUID id)
	{
		service.delete(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	/**
	 * Method to update the specified client's information.
	 *
	 * @param clientModel the client with updated information
	 */
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<?> update(@RequestBody ClientModel clientModel)
	{
		service.update(clientModel);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	/**
	 * Method to retrieve the client using an id.
	 *
	 * @param id client id
	 * @return the client model associated with the id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
	{
		ClientModel model = service.findOne(id);
		return new ResponseEntity<>(model, HttpStatus.OK);
	}

	/**
	 * Method to create a client using the information provided by the user.
	 *
	 * @param clientModel the client model generated using information by the user
	 */
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> create(@RequestBody ClientModel clientModel)
	{
		service.create(clientModel);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	/**
	 * Method to retrieve all the clients.
	 *
	 * @return a list of all the client models
	 */
	@RequestMapping(value = "/All", method = RequestMethod.GET)
	public ResponseEntity<?> findAll()
	{
		List<ClientModel> model = service.findAll();
		return new ResponseEntity<>(model, HttpStatus.OK);
	}

	@RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
	public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel)
	{
		GridResultModel model = service.getGridList(gridRequestModel);
		return new ResponseEntity<>(model, HttpStatus.OK);
	}
}
