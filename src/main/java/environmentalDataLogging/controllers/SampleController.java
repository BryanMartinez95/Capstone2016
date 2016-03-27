package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.SampleModel;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for sample related actions.
 * Capable of handling cases of:
 * Deleting sample by id
 * Updating sample information
 * Getting sample by id
 * Creating a new sample
 * Getting all samples
 */
@RestController
@RequestMapping("/Api/Sample")
public class SampleController
{
    @Autowired
    ISampleService service;

    /**
     * Method to delete the sample using an id.
     * @param id the sample id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
	    service.delete(id);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified sample's information.
     * @param model the sample with updated information
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody SampleModel model)
    {
	    service.update(model);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve the sample using an id.
     * @param id sample id
     * @return the sample model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
	    SampleModel model = service.findOne(id);
	    return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Method to create a sample using the information provided by the user.
     * @param model the sample model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody SampleModel model)
    {
	    service.create(model);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }

	@RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
	public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel)
	{
		GridResultModel model = service.getGridList(gridRequestModel);
		return new ResponseEntity<>(model, HttpStatus.OK);
	}

	@RequestMapping(value = "/findUUIDByLabId/{labId}", method = RequestMethod.GET)
	public ResponseEntity<?> findUUIDByLabId(@PathVariable("labId") String labId)
	{
		UUID uuid = service.findUUIDByLabId(labId);
		return new ResponseEntity<>(uuid, HttpStatus.OK);
	}
}
