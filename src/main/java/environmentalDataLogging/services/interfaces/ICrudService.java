package environmentalDataLogging.services.interfaces;

import java.util.List;
import java.util.UUID;


public interface ICrudService<TEntity, TModel>
{
	TModel findOne(UUID id);

	List<TModel> findAll();

	void update(TModel model);

	void delete(UUID id);

	void create(TModel model);
}
