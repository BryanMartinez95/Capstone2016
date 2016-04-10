package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;

import java.lang.reflect.InvocationTargetException;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;

/**
 * The interface Crud service.
 *
 * @param <TEntity> the type parameter
 * @param <TModel>  the type parameter
 */
public interface ICrudService<TEntity, TModel>
{
    /**
     * Find one t model.
     *
     * @param id the id
     * @return the t model
     */
    TModel findOne(UUID id);

    /**
     * Find all list.
     *
     * @return the list
     */
    List<TModel> findAll();

    /**
     * Update.
     *
     * @param model the model
     */
    void update(TModel model);

    /**
     * Delete.
     *
     * @param id the id
     */
    void delete(UUID id);

    /**
     * Create.
     *
     * @param model the model
     */
    void create(TModel model);

    /**
     * Gets grid list.
     *
     * @param gridRequestModel the grid request model
     * @return the grid list
     */
    GridResultModel getGridList(GridRequestModel gridRequestModel) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, ClassNotFoundException;
}
