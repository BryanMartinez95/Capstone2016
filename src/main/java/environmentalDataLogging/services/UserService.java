package environmentalDataLogging.services;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.UserModel;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * User service provides all of the required methods for the user controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class UserService extends BaseService
{
    /**
     * Delete - Removes the user from the database by id
     *
     * @param id the id of the user to be deleted
     */
    public void delete(UUID id)
    {
    }

    /**
     * Update - Updates the user in the database with the info passed into the method.
     *
     * @param userModel the userModel is the view models info to be updated in the database
     */
    public void update(UserModel userModel)
    {

    }

    /**
     * FindOne - Finds the user by id in the database, converts the entity to a view userModel
     *      and returns the view userModel to the controller
     *
     * @param id the id of the user to find
     * @return the client userModel is the view userModel to be returned to the view
     */
    public UserModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new user based on the view userModel passed into the function
     *
     * @param userModel the userModel is the user info to use to create a new entity in the database
     */
    public void create(UserModel userModel)
    {

    }

    /**
     * FindAll - Finds and returns all users from the database.
     *
     * @return the list of users to return to the controller
     */
    public List<UserModel> findAll()
    {
        return null;
    }

    public User findByEmail(String email)
    {
        return userRepository.findByEmail(email);

    }

    public UserModel getCurrentUser()
    {
        org.springframework.security.core.userdetails.User currentUser =  ( org.springframework.security.core.userdetails.User ) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        User user = userRepository.findByEmail(currentUser.getUsername());

        UserModel userModel = modelMapper.map(user, UserModel.class);

        return userModel;
    }
}
