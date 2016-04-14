package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.InvestigatorModel;
import environmentalDataLogging.services.interfaces.IInvestigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
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
    /**
     * The Service.
     */
    @Autowired
    IInvestigatorService service;

    /**
     * Method to update the specified investigator's information.
     *
     * @param investigatorModel the investigator with updated information
     * @return the response entity
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody InvestigatorModel investigatorModel)
    {
        service.update(investigatorModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve the investigator using an id.
     *
     * @param id investigator id
     * @return the investigator model associated with the id
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
        InvestigatorModel model = service.findOne(id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Method to create a investigator using the information provided by the user.
     *
     * @param investigatorModel the investigator model generated using information by the user
     * @return the response entity
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody InvestigatorModel investigatorModel)
    {
        service.create(investigatorModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Gets grid.
     *
     * @param gridRequestModel the grid request model
     * @return the grid
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
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
        return new ResponseEntity<Object>(service.getInvestigatorList(), HttpStatus.OK);
    }
}
