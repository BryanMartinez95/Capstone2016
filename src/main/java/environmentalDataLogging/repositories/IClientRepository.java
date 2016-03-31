package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Client;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Client repository.
 */
@Transactional
public interface IClientRepository extends IBaseRepository<Client>
{
	/**
	 * Find by name client.
	 *
	 * @param name the name
	 * @return the client
	 */
	Client findByName(String name);
}


