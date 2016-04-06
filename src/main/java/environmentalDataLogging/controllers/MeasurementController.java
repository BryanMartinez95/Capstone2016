package environmentalDataLogging.controllers;

import environmentalDataLogging.models.views.MeasurementModel;
import environmentalDataLogging.services.interfaces.IMeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for measurement related actions.
 * Capable of handling cases of:
 * Deleting measurement by id
 * Updating measurement information
 * Getting measurement by id
 * Creating a new measurement
 * Getting all measurements
 */
@RestController
@RequestMapping("/Api/Measurement")
public class MeasurementController
{
    /**
     * The Service.
     */
    @Autowired
    IMeasurementService service;

    /**
     * Method to delete the measurement using an id.
     *
     * @param id the measurement id
     * @return the response entity
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified measurement's information.
     *
     * @param model the measurement with updated information
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody MeasurementModel model)
    {
        service.update(model);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to create a measurement using the information provided by the user.
     *
     * @param model the measurement model generated using information by the user
     * @return ResponseEntity with the UUID of the created measurement
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody MeasurementModel model)
    {
        UUID id = service.createAndReturnUUID(model);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    /**
     * Method to retrieve all the measurements.
     *
     * @return a list of all the measurement models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public ResponseEntity<?> findAll()
    {
        List<MeasurementModel> models = service.findAll();
        return new ResponseEntity<>(models, HttpStatus.OK);
    }

    /**
     * Method to retrieve all the measurements for a specific sample.
     *
     * @param id the id
     * @return a list of all the measurement models for a specific sample
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findBySampleId(@PathVariable("id") UUID id)
    {
        List<MeasurementModel> models = service.findBySampleId(id);
        return new ResponseEntity<>(models, HttpStatus.OK);
    }
}
