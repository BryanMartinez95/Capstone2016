package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Investigator;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IInvestigatorRepository extends IBaseRepository<Investigator>
{
}

