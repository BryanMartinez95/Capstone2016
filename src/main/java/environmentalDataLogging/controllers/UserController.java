package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
import java.security.Principal;
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
    /**
     * The Service.
     */
    @Autowired
    IUserService service;

    /**
     * The User repository.
     */
    @Autowired
    IUserRepository userRepository;

    /**
     * User principal.
     *
     * @param user the user
     * @return the principal
     */
    @RequestMapping("/Principle")
    public Principal user(Principal user)
    {
        return user;
    }

        /**
     * Method to update the specified user's information.
     *
     * @param userModel the user with updated information
     * @return the response entity
     */
        @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody UserModel userModel)
    {
        service.update(userModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve the user using an id.
     *
     * @param id user id
     * @return the user userModel associated with the id
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
        UserModel model = service.findOne(id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Method to create a user using the information provided by the administrator.
     *
     * @param userModel the user userModel generated using information provided by the administrator
     * @return the response entity
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody UserModel userModel)
    {
        service.create(userModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Gets current user.
     *
     * @return the current user
     */
    @RequestMapping(value = "/CurrentUser")
    public ResponseEntity<?> getCurrentUser()
    {
        UserModel model = service.findCurrentUser();
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Gets grid.
     *
     * @param gridRequestModel the grid request model
     * @return the grid
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, ClassNotFoundException, InstantiationException
    {
        GridResultModel model = service.getGridList(gridRequestModel);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    /**
     * Gets single select.
     *
     * @return the single select
     */
    @RequestMapping(value = "/SingleSelect", method = RequestMethod.GET)
    public ResponseEntity<?> getSingleSelect()
    {
        return new ResponseEntity<>(service.getUserList(), HttpStatus.OK);
    }
}
