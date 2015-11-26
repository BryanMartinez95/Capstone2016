package environmentalDataLogging.controllers;

import environmentalDataLogging.enums.Status;
import environmentalDataLogging.models.DeviceModel;
import environmentalDataLogging.services.DeviceService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Device")
public class DeviceController
{
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {
            DeviceService deviceService = new DeviceService();
        deviceService.delete(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update(DeviceModel model)
    {

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DeviceModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void delete(@PathVariable("model") DeviceModel model)
    {

    }

    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<DeviceModel> delete()
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
