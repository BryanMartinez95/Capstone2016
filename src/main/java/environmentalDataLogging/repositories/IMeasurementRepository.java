package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IMeasurementRepository extends IBaseRepository<Measurement>
{
}
