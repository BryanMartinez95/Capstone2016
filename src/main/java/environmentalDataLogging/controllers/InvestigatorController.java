package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.InvestigatorModel;
import environmentalDataLogging.services.interfaces.IInvestigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for investigator related actions.
 * Capable of handling cases of:
 * Deleting investigator by id
 * Updating investigator information
 * Getting investigator by id
 * Creating a new investigator
 * Getting all investigators
 */
@RestController
@RequestMapping("/Api/Investigator")
public class InvestigatorController
{
	@Autowired
	IInvestigatorService service;

	/**
	 * Method to delete the investigator using an id.
	 *
	 * @param id the investigator id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") UUID id)
	{
		service.delete(id);
	}

	/**
	 * Method to update the specified investigator's information.
	 *
	 * @param investigatorModel the investigator with updated information
	 */
	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody InvestigatorModel investigatorModel)
	{
		service.update(investigatorModel);
	}

	/**
	 * Method to retrieve the investigator using an id.
	 *
	 * @param id investigator id
	 * @return the investigator model associated with the id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public InvestigatorModel findOne(@PathVariable("id") UUID id)
	{
		return service.findOne(id);
	}

	/**
	 * Method to create a investigator using the information provided by the user.
	 *
	 * @param investigatorModel the investigator model generated using information by the user
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void create(@RequestBody InvestigatorModel investigatorModel)
	{
		service.create(investigatorModel);
	}

	/**
	 * Method to retrieve all the investigators.
	 *
	 * @return a list of all the investigator models
	 */
	@RequestMapping(value = "/All", method = RequestMethod.GET)
	public List<InvestigatorModel> findAll()
	{
		return service.findAll();
	}

	@RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
	public GridResultModel getGrid(@RequestBody GridRequestModel gridRequestModel)
	{
		return service.getGridList(gridRequestModel);
	}
}
