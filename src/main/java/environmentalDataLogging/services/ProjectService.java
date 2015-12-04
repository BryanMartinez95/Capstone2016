package environmentalDataLogging.services;

import environmentalDataLogging.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Project service provides all of the required methods for the project controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ProjectService extends BaseService
{
    /**
     * Delete - Removes the project from the database by id
     *
     * @param id the id of the project to be deleted
     */
    public void delete(UUID id)
    {
    }

    /**
     * Update - Updates the project in the database with the info passed into the method.
     *
     * @param model the model is the view models info to be updated in the database
     */
    public void update(ProjectModel model)
    {

    }

    /**
     * FindOne - Finds the project by id in the database, converts the entity to a view model
     *      and returns the view model to the controller
     *
     * @param id the id of the project to find
     * @return the project model is the view model to be returned to the view
     */
    public ProjectModel findOne(UUID id)
    {
        return null;
    }

    /**
     * Create - Creates a new project based on the view model passed into the function
     *
     * @param model the model is the project info to use to create a new entity in the database
     */
    public void create(ProjectModel model)
    {

    }

    /**
     * FindAll - Finds and returns all projects from the database.
     *
     * @return the list of projects to return to the controller
     */
    public List<ProjectModel> findAll()
    {
        return null;
    }
}
