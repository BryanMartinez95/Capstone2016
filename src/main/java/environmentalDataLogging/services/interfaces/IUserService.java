package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.UserModel;

import java.util.Comparator;
import java.util.List;

/**
 * The interface User service.
 */
public interface IUserService extends ICrudService<User, UserModel>
{
    /**
     * Find current user user model.
     *
     * @return the user model
     */
    UserModel findCurrentUser();

    /**
     * Find by email user.
     *
     * @param email the email
     * @return the user
     */
    User findByEmail(String email);

    /**
     * Gets user list.
     *
     * @return the user list
     */
    List<SelectListModel> getUserList();
}
