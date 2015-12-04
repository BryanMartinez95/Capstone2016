package environmentalDataLogging.services;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.models.DeviceModel;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

/**
 * Device service provides all of the required methods for the device controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class DeviceService extends BaseService
{
    /**
     * Delete - Removes the device from the database by id
     *
     * @param id the id of the device to be deleted
     */
    public void delete(UUID id)
    {
        deviceRepository.delete(id);
    }

    /**
     * Update - Updates the device in the database with the info passed into the method.
     *
     * @param model the model is the view models info to be updated in the database
     */
    public void update(DeviceModel model)
    {
    }

    /**
     * FindOne - Finds the device by id in the database, converts the entity to a view model
     *      and returns the view model to the controller
     *
     * @param id the id of the device to find
     * @return the device model is the view model to be returned to the view
     */
    public DeviceModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new device based on the view model passed into the function
     *
     * @param model the model is the device info to use to create a new entity in the database
     */
    public void create(DeviceModel model)
    {
    }

    /**
     * FindAll - Finds and returns all devices from the database.
     *
     * @return the list of devices to return to the controller
     */
    public List<DeviceModel> findAll()
    {
        return null;
    }
}
