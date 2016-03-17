package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;

import java.util.List;

public interface IDeviceService extends ICrudService<Device, DeviceModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
	List<SelectListModel> getDeviceList();
}
