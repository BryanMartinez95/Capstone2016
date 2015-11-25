package environmentalDataLogging.services;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.models.DeviceModel;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
public class DeviceService extends BaseService
{
    public void delete(UUID id)
    {
        deviceRepository.delete(id);
    }

    public void update(DeviceModel model)
    {
    }

    public DeviceModel findOne(UUID id)
    {
        return null;
    }

    public void create(DeviceModel model)
    {
    }

    public List<DeviceModel> findAll()
    {
        return null;
    }

    public void setStatus(UUID id, Status status)
    {
        Device device = deviceRepository.getOne(id);
        device.setStatus(status);
        deviceRepository.saveAndFlush(device);
    }
}
