package environmentalDataLogging.services.implementations;

import com.google.common.base.Predicates;
import environmentalDataLogging.Helpers.ComparatorHelper;
import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.Helpers.PredicateHelper;
import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.SortType;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IBaseRepository;
import environmentalDataLogging.services.interfaces.ICrudService;
import environmentalDataLogging.services.interfaces.ISecurityService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Predicate;

/**
 * The type Crud service.
 *
 * @param <TEntity> the type parameter
 * @param <TModel>  the type parameter
 */
public class CrudService<TEntity extends BaseEntity, TModel> implements ICrudService<TEntity, TModel>
{
    /**
     * The Repository.
     */
    @Autowired
    protected IBaseRepository<TEntity> repository;

    /**
     * The Model mapper.
     */
    @Autowired
    protected ModelMapper modelMapper;

    /**
     * The Security service.
     */
    @Autowired
    ISecurityService securityService;

    /**
     * The Entity class.
     */
    protected Class<TEntity> entityClass;
    /**
     * The Model class.
     */
    protected Class<TModel> modelClass;

    /**
     * Instantiates a new Crud service.
     */
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
    public GridResultModel getGridList(GridRequestModel gridRequestModel) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, ClassNotFoundException
    {
        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<TModel> gridResultModel = new GridResultModel<>();

        List<TModel> models = new ArrayList<>();
        List<Object> entities = new ArrayList<>();

        Comparator<TEntity> comparator = ComparatorHelper.setComparator(gridRequestModel.getSortColumn(), entityClass);
        List<Predicate> predicates = setPredicates(gridRequestModel.getFilters(), entityClass);

        repository.findAll().stream().sorted(comparator).filter(t -> predicates.stream().allMatch(f -> f.test(t))).forEach(entities::add);

        if (gridRequestModel.getSortType().equals(SortType.DESCENDING))
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
        gridResultModel.setFilters(gridRequestModel.getFilters());
        gridResultModel.setSortColumn(gridRequestModel.getSortColumn());
        gridResultModel.setSortType(gridRequestModel.getSortType());
        gridResultModel.setIgnoredColumns(gridRequestModel.getIgnoredColumns());

        return gridResultModel;
    }

    /**
     * Before update.
     *
     * @param entity the entity
     */
    protected void beforeUpdate(TEntity entity)
    {
        entity.setDateEdited(LocalDate.now());
        entity.setEditedBy(securityService.getCurrentUserId());
    }

    /**
     * Before add.
     *
     * @param entity the entity
     */
    protected void beforeAdd(TEntity entity)
    {
        entity.setAddedBy(securityService.getCurrentUserId());
        entity.setDateAdded(LocalDate.now());
    }

    /**
     * Before delete.
     *
     * @param entity the entity
     */
    protected void beforeDelete(TEntity entity)
    {
        entity.setDeletedBy(securityService.getCurrentUserId());
        entity.setDateDeleted(LocalDate.now());
    }

    protected List<Predicate> setPredicates(List<FilterModel> filters, Class entityClass) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException, InstantiationException, ClassNotFoundException
    {
        List<Predicate> result = new ArrayList<>();

        if (filters.isEmpty())
        {
            return result;
        }
        else
        {
            for (FilterModel value : filters)
            {
                Method method = entityClass.getDeclaredMethod(value.getColumn() + "Predicate", String.class);
                result.add((Predicate) method.invoke(null, value.getValue()));
            }
        }

        return result;
    }
}
