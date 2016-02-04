package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.SampleIdentifier;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ISampleIdentifierRepository extends IBaseRepository<SampleIdentifier>
{
}

