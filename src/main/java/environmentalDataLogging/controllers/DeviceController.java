package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
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
    public void delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
    }
    
    /**
     * Method to update the specified device's information.
     *
     * @param deviceModel the device with updated information
     */
    @RequestMapping(method = RequestMethod.PUT)
    public void update(@RequestBody DeviceModel deviceModel)
    {
        service.update(deviceModel);
    }
    
    /**
     * Method to retrieve the device using an id.
     *
     * @param id device id
     * @return the device deviceModel associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DeviceModel findOne(@PathVariable("id") UUID id)
    {
        return service.findOne(id);
    }
    
    /**
     * Method to create a device using the information provided by the administrator.
     *
     * @param deviceModel the device deviceModel generated using information provided by the administrator
     */
    @RequestMapping(method = RequestMethod.POST)
    public void create(@RequestBody DeviceModel deviceModel)
    {
        service.create(deviceModel);
    }
    
    /**
     * Method to retrieve all the devices.
     *
     * @return a list of all the device models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<DeviceModel> findAll()
    {
        return service.findAll();
    }
    
    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public GridResultModel getGrid(@RequestBody GridRequestModel gridRequestModel)
    {
        return service.getGridList(gridRequestModel);
    }

    @RequestMapping(value = "/SingleSelect", method = RequestMethod.GET)
    public ResponseEntity<?> getSingleSelect()
    {
        return new ResponseEntity<Object>(service.getDeviceList(), HttpStatus.OK);
    }
}
