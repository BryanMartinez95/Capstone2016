package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Sample;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ISampleRepository extends IBaseRepository<Sample>
{
    Sample findByLabId(String labId);
}
