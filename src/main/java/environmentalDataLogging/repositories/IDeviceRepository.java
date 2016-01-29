
package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Device;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public interface IDeviceRepository extends JpaRepository<Device, UUID>
{
    Device findByName(String name);
}
