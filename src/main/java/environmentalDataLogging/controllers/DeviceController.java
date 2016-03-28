package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;
import environmentalDataLogging.services.interfaces.IDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for device related actions.
 * Capable of handling cases of:
 * Deleting device by id
 * Updating device information
 * Getting device by id
 * Creating a new device
 * Getting all devices
 */
@RestController
@RequestMapping("/Api/Device")
public class DeviceController
{
    @Autowired
    IDeviceService service;
    
    /**
     * Method to delete the device using an id.
     *
     * @param id the device id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    /**
     * Method to update the specified device's information.
     *
     * @param deviceModel the device with updated information
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody DeviceModel deviceModel)
    {
        service.update(deviceModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    /**
     * Method to retrieve the device using an id.
     *
     * @param id device id
     * @return the device deviceModel associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
        DeviceModel model = service.findOne(id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
    
    /**
     * Method to create a device using the information provided by the administrator.
     *
     * @param deviceModel the device deviceModel generated using information provided by the administrator
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody DeviceModel deviceModel)
    {
        service.create(deviceModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    /**
     * Method to retrieve all the devices.
     *
     * @return a list of all the device models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public ResponseEntity<?> findAll()
    {
        List<DeviceModel> model = service.findAll();
        return new ResponseEntity<>(model, HttpStatus.OK);
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
        return new ResponseEntity<>(service.getDeviceList(), HttpStatus.OK);
    }
}
