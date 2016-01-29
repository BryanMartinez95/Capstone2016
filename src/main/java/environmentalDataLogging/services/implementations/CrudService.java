package environmentalDataLogging.services.implementations;

import environmentalDataLogging.repositories.BaseRepository;
import environmentalDataLogging.services.interfaces.ICrudService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.List;

public class CrudService<E, M, ID extends Serializable> implements ICrudService<E, M, ID>
{
	@Autowired
	protected JpaRepository<E, ID> repository;

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

	public M findOne(ID id)
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

	public void delete(ID id)
	{
		repository.delete(id);
	}

	public void create(M model)
	{
		repository.saveAndFlush(modelMapper.map(model, entityClass));
	}
}
