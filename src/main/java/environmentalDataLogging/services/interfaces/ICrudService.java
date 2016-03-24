package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;

import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;

public interface ICrudService<TEntity, TModel>
{
    TModel findOne(UUID id);

    List<TModel> findAll();

    void update(TModel model);

    void delete(UUID id);

    void create(TModel model);

    GridResultModel getGridList(GridRequestModel gridRequestModel);
}
