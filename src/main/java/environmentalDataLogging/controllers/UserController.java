package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    IUserService service;

    @Autowired
    IUserRepository userRepository;

    @RequestMapping("/Principle")
    public Principal user(Principal user)
    {
        return user;
    }

    /**
     * Method to delete the user using an id.
     *
     * @param id the user id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified user's information.
     *
     * @param userModel the user with updated information
     */
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
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody UserModel userModel)
    {
        service.create(userModel);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to retrieve all the users.
     *
     * @return a list of all the user models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public ResponseEntity<?> findAll()
    {
        List<UserModel> models = service.findAll();
        return new ResponseEntity<>(models, HttpStatus.OK);
    }

    @RequestMapping(value = "/CurrentUser")
    public ResponseEntity<?> getCurrentUser()
    {
        UserModel model = service.findCurrentUser();
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel)
    {
//        FilterModel filterModel = new FilterModel("firstname", "a");
//        gridRequestModel.setAscending(false);
//        List<FilterModel> filters = new ArrayList<>();
//        filters.add(filterModel);
//
//        gridRequestModel.setFilters(filters);
//        gridRequestModel.setSortColumn("firstname");

        GridResultModel model = service.getGridList(gridRequestModel);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
}
