package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;

import java.util.List;

public interface IDeviceService extends ICrudService<Device, DeviceModel>
{
<<<<<<< HEAD
=======
	GridResultModel getGridList(GridRequestModel gridRequestModel);
>>>>>>> 12e14cf528b7a65cd17a0b985d023d9fda9be2ce
	List<SelectListModel> getDeviceList();
}
