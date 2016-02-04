
package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Device;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IDeviceRepository extends IBaseRepository<Device>
{
    Device findByName(String name);
}
