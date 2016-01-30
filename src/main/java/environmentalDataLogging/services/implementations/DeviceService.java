package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.views.DeviceModel;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.services.interfaces.IDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Device service provides all of the required methods for the device controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class DeviceService extends CrudService<Device, DeviceModel> implements IDeviceService
{
	@Autowired
	IDeviceRepository repository;
}
