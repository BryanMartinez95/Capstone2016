package environmentalDataLogging.services;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.DeviceModel;
import environmentalDataLogging.repositories.DeviceRepository;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;

public class DeviceService
{
    @Autowired
    DeviceRepository deviceRepository;

    public DeviceModel getDevice(UUID id)
    {
        Device entity =  deviceRepository.findOne(id);

        return null;
    }
}
