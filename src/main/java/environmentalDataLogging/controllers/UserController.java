package environmentalDataLogging.controllers;

import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.services.interfaces.IUserService;
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
@RequestMapping("/Api/User")
public class UserController
{
	@Autowired
	IUserService service;

	/**
	 * Method to delete the user using an id.
	 *
	 * @param id the user id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") UUID id)
	{
		service.delete(id);
	}

	/**
	 * Method to update the specified user's information.
	 *
	 * @param userModel the user with updated information
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public void update(UserModel userModel)
	{
		service.update(userModel);
	}

	/**
	 * Method to retrieve the user using an id.
	 *
	 * @param id user id
	 * @return the user userModel associated with the id
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public UserModel findOne(@PathVariable("id") UUID id)
	{
		return service.findOne(id);
	}

	/**
	 * Method to create a user using the information provided by the administrator.
	 *
	 * @param userModel the user userModel generated using information provided by the administrator
	 */
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public void create(@PathVariable("model") UserModel userModel)
	{
		service.create(userModel);
	}

	/**
	 * Method to retrieve all the users.
	 *
	 * @return a list of all the user models
	 */
	@RequestMapping(value = "/All", method = RequestMethod.GET)
	public List<UserModel> findAll()
	{
		return service.findAll();
	}

	@RequestMapping(value = "/CurrentUser")
	public UserModel getCurrentUser()
	{
		return service.findCurrentUser();
	}
}
