package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;

import java.util.List;

public interface IDeviceService extends ICrudService<Device, DeviceModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);

	List<SelectListModel> getDeviceList();
}
