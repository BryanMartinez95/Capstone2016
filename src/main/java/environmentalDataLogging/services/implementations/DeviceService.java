package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.DeviceModel;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.services.interfaces.IDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<SelectListModel> getDeviceList()
    {
        List<Device> devices = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Device device : devices)
        {
            models.add(new SelectListModel(device.getName(), device.getId()));
        }

        return models;
    }
}
