package environmentalDataLogging.services.interfaces;

import java.io.Serializable;
import java.util.List;


public interface ICrudService<E, M,  ID extends Serializable>
{
	M findOne(ID id);

	List<M> findAll();

	void update(M model);

	void delete(ID id);

	void create(M model);
}
