package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.User;
import org.springframework.stereotype.Service;

import java.util.Comparator;

@Service
public class FilterService
{
    public Comparator set(String value, Class entityClass)
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
}
