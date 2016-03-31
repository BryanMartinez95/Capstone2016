package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;

import java.util.List;

/**
 * The interface Device service.
 */
public interface IDeviceService extends ICrudService<Device, DeviceModel>
{
	/**
	 * Gets device list.
	 *
	 * @return the device list
	 */
	List<SelectListModel> getDeviceList();
}
