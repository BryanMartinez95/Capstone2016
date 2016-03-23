package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.BaseEntity;
import environmentalDataLogging.entities.User;
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

        Comparator<TEntity> comparator = setComparator(gridRequestModel.getSortColumn(), entityClass);
        List<Predicate> predicates = setPredicates(gridRequestModel.getFilters(), entityClass);

        repository.findAll().stream().sorted(comparator).filter(t -> predicates.stream().allMatch(f -> f.test(t))).forEach(entities::add);

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
        gridResultModel.setFilters(gridRequestModel.getFilters());
        gridResultModel.setSortColumn(gridRequestModel.getSortColumn());
        gridResultModel.setAscending(gridRequestModel.isAscending());
        gridResultModel.setIgnoredColumns(gridRequestModel.getIgnoredColumns());

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

    protected Comparator setComparator(String value, Class entityClass)
    {
        if (entityClass.equals(User.class))
        {
            if (value.isEmpty())
            {
                return User.firstNameComparator;
            }
            else if (value.equalsIgnoreCase("firstName"))
            {
                return User.firstNameComparator;
            }
            else if (value.equalsIgnoreCase("lastName"))
            {
                return User.lastNameComparator;
            }
            else if (value.equalsIgnoreCase("email"))
            {
                return User.emailComparator;
            }
            else
            {
                return User.firstNameComparator;
            }
        }
        else
        {
            return null;
        }
    }

    protected List<Predicate> setPredicates(List<FilterModel> values, Class entityClass)
    {
        List<Predicate> result = new ArrayList<>();

        if (entityClass.equals(User.class))
        {
            if (values.isEmpty())
            {
                return result;
            }
            else
            {
                for (FilterModel value : values)
                {
                    if (value.getColumn().equalsIgnoreCase("firstname"))
                    {
                        result.add(User.filterByFirstName(value.getValue()));
                    }
                    if (value.getColumn().equalsIgnoreCase("lastname"))
                    {
                        result.add(User.filterByLastName(value.getValue()));
                    }
                }
            }
        }
        return result;
    }
}
