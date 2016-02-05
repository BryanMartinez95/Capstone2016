package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.BaseEntity;
import environmentalDataLogging.repositories.IBaseRepository;
import environmentalDataLogging.services.interfaces.ICrudService;
import environmentalDataLogging.services.interfaces.ISecurityService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.reflect.ParameterizedType;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CrudService<TEntity extends BaseEntity, TModel> implements ICrudService<TEntity, TModel>
{
	@Autowired
	protected IBaseRepository<TEntity> repository;

	@Autowired
	protected ModelMapper modelMapper;

	@Autowired
	ISecurityService securityService;

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
		TEntity entity = modelMapper.map(model, entityClass);
		beforeUpdate(entity);
		repository.saveAndFlush(entity);
	}

	public void delete(UUID id)
	{
		TEntity entity = repository.findOne(id);
		beforeDelete(entity);
		entity.setDeleted(true);
		repository.saveAndFlush(entity);
	}

	public void create(TModel model)
	{
		TEntity entity = modelMapper.map(model, entityClass);
		beforeAdd(entity);
		repository.saveAndFlush(entity);
	}

	protected void beforeUpdate(TEntity entity)
	{
		entity.setDateEdited(LocalDate.now());
		entity.setEditedBy(securityService.getCurrentUserId());
	}

	protected void beforeAdd(TEntity entity)
	{
		entity.setAddedBy(securityService.getCurrentUserId());
		entity.setDateAdded(LocalDate.now());
	}

	protected void beforeDelete(TEntity entity)
	{
		entity.setDeletedBy(securityService.getCurrentUserId());
		entity.setDateDeleted(LocalDate.now());
	}
}
