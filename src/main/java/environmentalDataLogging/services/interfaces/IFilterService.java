package environmentalDataLogging.services.interfaces;

import java.util.Comparator;

public interface IFilterService
{
    Comparator set(String value, Class entityClass);
}
