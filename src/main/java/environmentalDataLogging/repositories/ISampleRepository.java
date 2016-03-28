package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Sample;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Transactional
public interface ISampleRepository extends IBaseRepository<Sample>
{
    Sample findByLabId(String labId);
    List<Sample> findByProjectId(UUID id);
    List<Sample> findByDeviceId(UUID id);
}
