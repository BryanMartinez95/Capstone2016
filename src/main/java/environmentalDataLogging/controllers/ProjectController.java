package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ProjectModel;
import environmentalDataLogging.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Project")
public class ProjectController
{
    @Autowired
    ProjectService projectService;

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update( ProjectModel model)
    {

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ProjectModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") ProjectModel model)
    {

    }

    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<ProjectModel> delete()
    {
        return null;
    }
}
