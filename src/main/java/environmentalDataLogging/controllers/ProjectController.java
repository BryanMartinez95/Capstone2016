package environmentalDataLogging.controllers;

import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for project related actions.
 * Capable of handling cases of:
 * Deleting project by id
 * Updating project information
 * Getting project by id
 * Creating a new project
 * Getting all projects
 */
@RestController
@RequestMapping("/Api/Project")
public class ProjectController
{
    @Autowired
    IProjectService service;

    /**
     * Method to delete the project using an id.
     * @param id the project id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    /**
     * Method to update the specified project's information.
     * @param model the project with updated information
     */
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update( ProjectModel model)
    {

    }

    /**
     * Method to retrieve the project using an id.
     * @param id project id
     * @return the project model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ProjectModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    /**
     * Method to create a project using the information provided by the user.
     * @param model the project model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.POST)
    public void create(@PathVariable("model") ProjectModel model)
    {

    }

    /**
     * Method to retrieve all the projects.
     * @return a list of all the project models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<ProjectModel> findAll()
    {
        return null;
    }
}
