package environmentalDataLogging.Helpers;


import environmentalDataLogging.entities.*;

import java.util.Comparator;

public class ComparatorHelper
{
    public static Comparator setComparator(String value, Class entityClass){
        if (entityClass.equals(User.class))
        {
            if (value.equalsIgnoreCase("lastName"))
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

        if (entityClass.equals(Client.class))
        {
            if (value.equalsIgnoreCase("phonenumber"))
            {
                return Client.phoneNumberComparator;
            }
            else if (value.equalsIgnoreCase("email"))
            {
                return Client.emailComparator;
            }
            else if (value.equalsIgnoreCase("address"))
            {
                return Client.addressComparator;
            }
            else
            {
                return Client.nameComparator;
            }
        }

        if (entityClass.equals(Device.class))
        {

            return Device.nameComparator;
        }

        if (entityClass.equals(Investigator.class))
        {
            if (value.equalsIgnoreCase("phonenumber"))
            {
                return Investigator.phoneNumberComparator;
            }
            else if (value.equalsIgnoreCase("email"))
            {
                return Investigator.emailComparator;
            }
            else
            {
                return Investigator.nameComparator;
            }
        }

        if (entityClass.equals(Project.class))
        {
            return Project.nameComparator;
        }

        if (entityClass.equals(Sample.class))
        {
            if (value.equalsIgnoreCase("date"))
            {
                return Sample.dateComparator;
            }
            else
            {
                return Sample.labIdComparator;
            }
        }

        if (entityClass.equals(TestMethod.class))
        {
            return TestMethod.nameComparator;
        }

        if (entityClass.equals(Unit.class))
        {
            return Unit.nameComparator;
        }

        return null;
    }
}
