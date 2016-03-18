package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.FilterModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

@Service
public class FilterService
{
    public Comparator setComparator(String value, Class entityClass)
    {
        if (entityClass.equals(User.class))
        {
            if (value.equalsIgnoreCase("firstName"))
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

    public List<Predicate> setPredicates(List<FilterModel> values, Class entityClass)
    {
        List<Predicate> result = new ArrayList<>();

        if (entityClass.equals(User.class))
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

        return result;
    }
}
