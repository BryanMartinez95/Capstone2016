package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.UnitModel;
import environmentalDataLogging.services.interfaces.IUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for unit related actions.
 * Capable of handling cases of:
 * Deleting unit by id
 * Updating unit information
 * Getting unit by id
 * Creating a new unit
 * Getting all units
 */
@RestController
@RequestMapping("/Api/Unit")
public class UnitController
{
	@Autowired
	IUnitService service;

	/**
	 * Method to delete the unit using an id.
	 *
	 * @param id the unit id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") UUID id)
	{
		service.delete(id);
	}

	/**
	 * Method to update the specified unit's information.
	 *
	 * @param unitModel the unit with updated information
	 */
	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody UnitModel unitModel)
	{
		service.update(unitModel);
	}

	/**
	 * Method to retrieve the unit using an id.
	 *
	 * @param id unit id
	 * @return the unit unitModel associated with the id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public UnitModel findOne(@PathVariable("id") UUID id)
	{
		return service.findOne(id);
	}

	/**
	 * Method to create a unit using the information provided by the administrator.
	 *
	 * @param unitModel the unit unitModel generated using information provided by the administrator
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void create(@RequestBody UnitModel unitModel)
	{
		service.create(unitModel);
	}

	/**
	 * Method to retrieve all the units.
	 *
	 * @return a list of all the unit models
	 */
	@RequestMapping(value = "/All", method = RequestMethod.GET)
	public List<UnitModel> findAll()
	{
		return service.findAll();
	}

	@RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
	public GridResultModel getGrid(@RequestBody GridRequestModel gridRequestModel)
	{
		return service.getGridList(gridRequestModel);
	}
}
