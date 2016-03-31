package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.InvestigatorModel;
import environmentalDataLogging.services.interfaces.IInvestigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified investigator's information.
     *
     * @param investigatorModel the investigator with updated information
     */
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
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody InvestigatorModel investigatorModel)
    {
        service.create(investigatorModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel)
    {
        GridResultModel model = service.getGridList(gridRequestModel);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    @RequestMapping(value = "/SingleSelect", method = RequestMethod.GET)
    public ResponseEntity<?> getSingleSelect()
    {
        return new ResponseEntity<Object>(service.getInvestigatorList(), HttpStatus.OK);
    }
}
