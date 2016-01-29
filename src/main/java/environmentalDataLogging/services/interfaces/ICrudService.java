package environmentalDataLogging.services.interfaces;

import java.util.List;
import java.util.UUID;


public interface ICrudService<E, M>
{
	M findOne(UUID id);

	List<M> findAll();

	void update(M model);

	void delete(UUID id);

	void create(M model);
}
