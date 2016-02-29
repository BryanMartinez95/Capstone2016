package environmentalDataLogging.controllers;

import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
     *
     * @param id the project id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
    }
    
    /**
     * Method to update the specified project's information.
     *
     * @param projectModel the project with updated information
     */
    @RequestMapping(method = RequestMethod.PUT)
    public void update(@RequestBody ProjectModel projectModel)
    {
        service.update(projectModel);
    }
    
    /**
     * Method to retrieve the project using an id.
     *
     * @param id project id
     * @return the project model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ProjectModel findOne(@PathVariable("id") UUID id)
    {
        return service.findOne(id);
    }
    
    /**
     * Method to create a project using the information provided by the user.
     *
     * @param projectModel the project model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.POST)
    public void create(@RequestBody ProjectModel projectModel)
    {
        service.create(projectModel);
    }
    
    /**
     * Method to retrieve all the projects.
     *
     * @return a list of all the project models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<ProjectModel> findAll()
    {
        return service.findAll();
    }
    
    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public GridResultModel getGrid(@RequestBody GridRequestModel gridRequestModel)
    {
        return service.getGridList(gridRequestModel);
    }
}
