package environmentalDataLogging.services;

import com.sun.xml.internal.bind.v2.model.core.ID;
//import environmentalDataLogging.entities.BaseEntity;
//import environmentalDataLogging.repositories.BaseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

//public abstract class CrudService<E extends BaseEntity, M, G>
public abstract class CrudService<E, M, G>
{
	@Autowired
	protected JpaRepository<E,UUID> repository;

	@Autowired
	ModelMapper modelMapper;

	protected Class<E> entityClass;
	protected Class<M> modelClass;

	@SuppressWarnings("unchecked")
	public CrudService()
	{
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		this.entityClass = (Class<E>) genericSuperclass.getActualTypeArguments()[0];
		this.modelClass = (Class<M>) genericSuperclass.getActualTypeArguments()[1];
	}

	public M findOne(UUID id)
	{
		E entity = repository.findOne(id);
		return modelMapper.map(entity, modelClass);
	}

	public List<M> findAll()
	{
		List<M> result = new ArrayList<>();
		List<E> entities = repository.findAll();
		for (E entity : entities)
		{
			result.add(modelMapper.map(entity, modelClass));
		}
		return result;
	}

	public void update(M model)
	{
		repository.saveAndFlush(modelMapper.map(model, entityClass));
	}

	public void delete(UUID id)
	{
		repository.delete(id);
	}

	public void create(M model)
	{
		repository.saveAndFlush(modelMapper.map(model, entityClass));
	}
}
