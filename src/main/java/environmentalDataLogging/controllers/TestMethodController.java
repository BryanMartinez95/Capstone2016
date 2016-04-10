package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;

import environmentalDataLogging.models.views.TestMethodModel;
import environmentalDataLogging.services.interfaces.ITestMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
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
@RequestMapping("/Api/TestMethod")
public class TestMethodController
{
    /**
     * The Service.
     */
    @Autowired
    ITestMethodService service;

    /**
     * Method to delete the unit using an id.
     *
     * @param id the unit id
     * @return the response entity
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified unit's information.
     *
     * @param unitModel the unit with updated information
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody TestMethodModel unitModel)
    {
        service.update(unitModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve the unit using an id.
     *
     * @param id unit id
     * @return the unit unitModel associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
        TestMethodModel model = service.findOne(id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Method to create a unit using the information provided by the administrator.
     *
     * @param unitModel the unit unitModel generated using information provided by the administrator
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody TestMethodModel unitModel)
    {
        service.create(unitModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
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
     * Gets single select.
     *
     * @return the single select
     */
    @RequestMapping(value = "/SingleSelect", method = RequestMethod.GET)
    public ResponseEntity<?> getSingleSelect()
    {
        return new ResponseEntity<Object>(service.getTestMethodList(), HttpStatus.OK);
    }
}
