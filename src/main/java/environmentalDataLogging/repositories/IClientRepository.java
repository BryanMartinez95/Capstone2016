package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Client;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IClientRepository extends IBaseRepository<Client>
{
	Client findByName(String name);
}


