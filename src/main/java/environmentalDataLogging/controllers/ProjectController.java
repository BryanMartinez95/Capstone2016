package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Object> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    /**
     * Method to update the specified project's information.
     *
     * @param projectModel the project with updated information
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<Object> update(@RequestBody ProjectModel projectModel)
    {
        service.update(projectModel);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    /**
     * Method to retrieve the project using an id.
     *
     * @param id project id
     * @return the project model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findOne(@PathVariable("id") UUID id)
    {
        ProjectModel model = service.findOne(id);
	    return new ResponseEntity<>(model, HttpStatus.OK);
    }
    
    /**
     * Method to create a project using the information provided by the user.
     *
     * @param projectModel the project model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody ProjectModel projectModel)
    {
        service.create(projectModel);
	    return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/GetGrid", method = RequestMethod.PUT)
    public ResponseEntity<?> getGrid(@RequestBody GridRequestModel gridRequestModel)
    {
	    GridResultModel model = service.getGridList(gridRequestModel);
	    return new ResponseEntity<>(model, HttpStatus.OK);
    }

    @RequestMapping(value = "/SingleSelect", method = RequestMethod.GET)
    public ResponseEntity<?> getSingleSelect()
    {
        return new ResponseEntity<Object>(service.getProjectList(), HttpStatus.OK);
    }
}
