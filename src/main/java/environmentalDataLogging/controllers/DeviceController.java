package environmentalDataLogging.controllers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.DeviceModel;
import environmentalDataLogging.repositories.DeviceRepository;
import environmentalDataLogging.services.DeviceService;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Device")
public class DeviceController
{



    public DeviceModel getDevice(UUID id)
    {
        DeviceService deviceService = new DeviceService();
        return null;
    }
}
