package environmentalDataLogging.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.List;

public class CrudService<E, M, G, ID extends Serializable>
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
		return modelMapper.map(repository.findOne(id), modelClass );
	}

	public List<M> findAll()
	{
		List<M> result = new ArrayList<>();
		for (E entity : repository.findAll())
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
