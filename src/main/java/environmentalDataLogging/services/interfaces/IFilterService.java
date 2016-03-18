package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.models.FilterModel;

import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

public interface IFilterService
{
    Comparator setComparator(String value, Class entityClass);

    List<Predicate> setPredicates(List<FilterModel> values, Class entityClass);
}
