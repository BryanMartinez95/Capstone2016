package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.BaseEntity;
import environmentalDataLogging.repositories.IBaseRepository;
import environmentalDataLogging.services.interfaces.ICrudService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CrudService<TEntity extends BaseEntity, TModel> implements ICrudService<TEntity, TModel>
{
	@Autowired
	protected IBaseRepository<TEntity> repository;

	@Autowired
	protected ModelMapper modelMapper;

	protected Class<TEntity> entityClass;
	protected Class<TModel> modelClass;

	@SuppressWarnings("unchecked")
	public CrudService()
	{
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		this.entityClass = (Class<TEntity>) genericSuperclass.getActualTypeArguments()[0];
		this.modelClass = (Class<TModel>) genericSuperclass.getActualTypeArguments()[1];
	}

	public TModel findOne(UUID id)
	{
		TEntity entity = repository.findOne(id);
		return modelMapper.map(entity, modelClass);
	}

	public List<TModel> findAll()
	{
		List<TModel> result = new ArrayList<>();
		List<TEntity> entities = repository.findAll();
		for (TEntity entity : entities)
		{
			result.add(modelMapper.map(entity, modelClass));
		}
		return result;
	}

	public void update(TModel model)
	{
		repository.saveAndFlush(modelMapper.map(model, entityClass));
	}

	public void delete(UUID id)
	{
		repository.delete(id);
	}

	public void create(TModel model)
	{
		TEntity entity = modelMapper.map(model, entityClass);

		repository.saveAndFlush(entity);
	}
}
