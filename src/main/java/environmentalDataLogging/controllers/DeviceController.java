package environmentalDataLogging.controllers;

import environmentalDataLogging.enums.Status;
import environmentalDataLogging.models.views.DeviceModel;
import environmentalDataLogging.services.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for device related actions.
 * Capable of handling cases of:
 * Updating device information
 * Getting device by id
 * Getting all devices
 */
@RestController
@RequestMapping("/Device")
public class DeviceController
{
    /**
     * This is the device Service
     */
    @Autowired
    DeviceService deviceService;

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {
        DeviceService deviceService = new DeviceService();
        deviceService.delete(id);
    }

    /**
     * Method to update the specified device's information.
     *
     * @param model the device with updated information
     */
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update(DeviceModel model)
    {

    }

    /**
     * Method to retrieve the device using an id.
     *
     * @param id device id
     * @return the device model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DeviceModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    /**
     * Method to retrieve all the devices.
     *
     * @return a list of all the device models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<DeviceModel> findAll()
    {
        return null;
    }

    @RequestMapping(value = "/Visible/{id}", method = RequestMethod.PUT)
    public void setVisible(@PathVariable("id") UUID id, Status status)
    {
        DeviceService deviceService = new DeviceService();
        deviceService.delete(id);
    }
}
