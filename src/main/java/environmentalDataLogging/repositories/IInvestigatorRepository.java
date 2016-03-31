package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Investigator;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Investigator repository.
 */
@Transactional
public interface IInvestigatorRepository extends IBaseRepository<Investigator>
{
}

