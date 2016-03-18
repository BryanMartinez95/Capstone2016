package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.BaseEntity;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IBaseRepository;
import environmentalDataLogging.services.interfaces.ICrudService;
import environmentalDataLogging.services.interfaces.IFilterService;
import environmentalDataLogging.services.interfaces.ISecurityService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.lang.reflect.ParameterizedType;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Predicate;

public class CrudService<TEntity extends BaseEntity, TModel> implements ICrudService<TEntity, TModel>
{
    @Autowired
    protected IBaseRepository<TEntity> repository;

    @Autowired
    protected ModelMapper modelMapper;

    @Autowired
    ISecurityService securityService;

    @Autowired
    IFilterService filterService;

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
        if (entity == null)
        {
            throw new ResourceNotFoundException("Id: " + id + " not found.");
        }
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

    @SuppressWarnings("unchecked")
    public GridResultModel getGridList(GridRequestModel gridRequestModel)
    {
        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<UserModel> gridResultModel = new GridResultModel<>();

        List<TModel> models = new ArrayList<>();
        List<Object> entities = new ArrayList<>();

        Comparator<TEntity> comparator = filterService.setComparator("firstname", entityClass);
        List<Predicate> predicates = filterService.setPredicates(gridRequestModel.getFilters(), entityClass);

        repository.findAll().stream().sorted(comparator).filter(t -> predicates.stream().allMatch(f -> f.test(t))).forEach(e -> entities.add(e));

        if (!gridRequestModel.isAscending())
        {
            Collections.reverse(entities);
        }

        for (Object entity : entities)
        {
            models.add(modelMapper.map(entity, modelClass));
        }

        PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

        paginatedArrayList.gotoPage(currentPage - 1);

        gridResultModel.setCurrentPage(currentPage);
        gridResultModel.setPageSize(pageSize);
        gridResultModel.setData(paginatedArrayList);
        gridResultModel.setTotalItems(models.size());

        return gridResultModel;
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
