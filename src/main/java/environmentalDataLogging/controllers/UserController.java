package environmentalDataLogging.controllers;

import environmentalDataLogging.models.UserModel;
import environmentalDataLogging.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for user related actions.
 * Capable of handling cases of:
 * Deleting user by id
 * Updating user information
 * Getting user by id
 * Creating a new user
 * Getting all users
 */
@RestController
@RequestMapping("/User")
public class UserController
{
    @Autowired
    UserService userService;

    /**
     * Method to delete the user using an id.
     * @param id the user id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    /**
     * Method to update the specified user's information.
     * @param model the user with updated information
     */
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update( UserModel model)
    {

    }

    /**
     * Method to retrieve the user using an id.
     * @param id user id
     * @return the user model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public UserModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    /**
     * Method to create a user using the information provided by the administrator.
     * @param model the user model generated using information provided by the administrator
     */
    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") UserModel model)
    {

    }

    /**
     * Method to retrieve all the users.
     * @return a list of all the user models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<UserModel> delete()
    {
        return null;
    }
}
