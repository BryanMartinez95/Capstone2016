package environmentalDataLogging.services;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.grids.DeviceGridModel;
import environmentalDataLogging.models.views.DeviceModel;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Device service provides all of the required methods for the device controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class DeviceService extends CrudService<Device, DeviceModel, DeviceGridModel, UUID>
{

}
