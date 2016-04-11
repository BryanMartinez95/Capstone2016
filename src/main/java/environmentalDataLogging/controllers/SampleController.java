package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ExportRequestModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SampleExportModel;
import environmentalDataLogging.models.views.SampleModel;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
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
    /**
     * The Service.
     */
    @Autowired
    ISampleService service;

    /**
     * Method to delete the sample using an id.
     *
     * @param id the sample id
     * @return the response entity
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified sample's information.
     *
     * @param model the sample with updated information
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody SampleModel model)
    {
        service.update(model);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve the sample using an id.
     *
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
     *
     * @param model the sample model generated using information by the user
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody SampleModel model)
    {
        UUID id = service.createAndReturnUUID(model);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    /**
     * Gets grid.
     *
     * @param gridRequestModel the grid request model
     * @return the grid
     */
    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, ClassNotFoundException, InstantiationException
    {
        GridResultModel model = service.getGridList(gridRequestModel);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Gets grid by project id.
     *
     * @param gridRequestModel the grid request model
     * @param id               the id
     * @return the grid by project id
     */
    @RequestMapping(value = "/GetGridByProjectId/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> getGridByProjectId(@RequestBody GridRequestModel gridRequestModel, @PathVariable("id") UUID id)
    {
        GridResultModel model = service.getGridListByProjectId(gridRequestModel, id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Gets grid by device id.
     *
     * @param gridRequestModel the grid request model
     * @param id               the id
     * @return the grid by device id
     */
    @RequestMapping(value = "/GetGridByDeviceId/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> getGridByDeviceId(@RequestBody GridRequestModel gridRequestModel, @PathVariable("id") UUID id)
    {
        GridResultModel model = service.getGridListByDeviceId(gridRequestModel, id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Export response entity.
     *
     * @param exportRequestModel the export request model
     * @return the response entity
     */
    @RequestMapping(value = "/Export", method = RequestMethod.PUT)
    public ResponseEntity<?> export(@RequestBody ExportRequestModel exportRequestModel)
    {
        List<SampleExportModel> model = service.export(exportRequestModel);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
}
