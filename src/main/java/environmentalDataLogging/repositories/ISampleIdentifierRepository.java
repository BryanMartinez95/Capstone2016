package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.SampleIdentifier;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Sample identifier repository.
 */
@Transactional
public interface ISampleIdentifierRepository extends IBaseRepository<SampleIdentifier>
{
}

