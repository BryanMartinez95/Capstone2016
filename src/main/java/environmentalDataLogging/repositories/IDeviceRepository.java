
package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Device;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Device repository.
 */
@Transactional
public interface IDeviceRepository extends IBaseRepository<Device>
{
    /**
     * Find by name device.
     *
     * @param name the name
     * @return the device
     */
    Device findByName(String name);
}
