//package environmentalDataLogging.Helpers;
//
//import environmentalDataLogging.entities.Sample;
//import environmentalDataLogging.entities.User;
//import environmentalDataLogging.enums.RoleType;
//import environmentalDataLogging.enums.Status;
//import environmentalDataLogging.models.FilterModel;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.function.Predicate;
//
///**
// * The type Predicate helper.
// */
//public class PredicateHelper
//{
//    /**
//     * Sets predicates.
//     *
//     * @param filters     the filters
//     * @param entityClass the entity class
//     * @return the predicates
//     */
//    public static List<Predicate> setPredicates(List<FilterModel> filters, Class entityClass)
//    {
//        List<Predicate> result = new ArrayList<>();
//
//        if (entityClass.equals(User.class))
//        {
//            if (filters.isEmpty())
//            {
//                return result;
//            }
//            else
//            {
//                for (FilterModel value : filters)
//                {
////                    if (value.getColumn().equalsIgnoreCase("firstname"))
////                    {
////                        result.add(User.filterByFirstName(value.getValue()));
////                    }
////                    if (value.getColumn().equalsIgnoreCase("lastname"))
////                    {
////                        result.add(User.filterByLastName(value.getValue()));
////                    }
////                    if (value.getColumn().equalsIgnoreCase("email"))
////                    {
////                        result.add(User.filterByemail(value.getValue()));
////                    }
////                    if (value.getColumn().equalsIgnoreCase("status"))
////                    {
////                        result.add(User.filterByStatus(Status.valueOf(value.getValue().toUpperCase())));
////                    }
////                    if (value.getColumn().equalsIgnoreCase("roletype"))
////                    {
////                        result.add(User.filterByRoleType(RoleType.valueOf(value.getValue().toUpperCase())));
////                    }
//                }
//            }
//        }
//
//        if (entityClass.equals(Sample.class))
//        {
//            if (filters.isEmpty())
//            {
//                return result;
//            }
//            else
//            {
//                for (FilterModel value : filters)
//                {
//                    if (value.getColumn().equalsIgnoreCase("labid"))
//                    {
//                        result.add(Sample.labIdPredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("companyname"))
//                    {
//                        result.add(Sample.companyNamePredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("creationdate"))
//                    {
//                        result.add(Sample.creationDatePredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("sampleidentity"))
//                    {
//                        result.add(Sample.sampleIdentityPredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("devicename"))
//                    {
//                        result.add(Sample.deviceNamePredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("projectname"))
//                    {
//                        result.add(Sample.projectNamePredicate(value.getValue()));
//                    }
//                    if (value.getColumn().equalsIgnoreCase("status"))
//                    {
//                        result.add(Sample.filterByStatus(Status.valueOf(value.getValue().toUpperCase())));
//                    }
//                }
//            }
//        }
//
//        return result;
//    }
//}
