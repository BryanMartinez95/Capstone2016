package environmentalDataLogging.controllers;

import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.ProjectExportModel;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
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
    /**
     * The Service.
     */
    @Autowired
    IProjectService service;

    /**
     * Report response entity.
     *
     * @param id the id
     * @return the response entity
     */
    @RequestMapping(value = "/{id}/Report", method = RequestMethod.GET)
    public ResponseEntity<?> report(@PathVariable("id") UUID id)
    {
        return new ResponseEntity<>(service.report(id), HttpStatus.OK);
    }

    /**
     * Method to delete the project using an id.
     *
     * @param id the project id
     * @return the response entity
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") UUID id)
    {
        service.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * Method to update the specified project's information.
     *
     * @param projectModel the project with updated information
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody ProjectModel projectModel)
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
     * @return the response entity
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody ProjectModel projectModel)
    {
        UUID id = service.createAndReturnUUID(projectModel);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    /**
     * Gets grid.
     *
     * @param gridRequestModel the grid request model
     * @return the grid
     */
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
        return new ResponseEntity<>(service.getProjectList(), HttpStatus.OK);
    }

    /**
     * Export response entity.
     *
     * @param id the id
     * @return the response entity
     */
    @RequestMapping(value = "/Export/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> export(@PathVariable("id") UUID id)
    {
        List<ProjectExportModel> model = service.export(id);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
}
