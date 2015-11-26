package environmentalDataLogging.services;

import environmentalDataLogging.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProjectService extends BaseService
{
    public void delete(UUID id)
    {
    }

    public void update(ProjectModel model)
    {

    }

    public ProjectModel findOne(UUID id)
    {
        return null;
    }

    public void create(ProjectModel model)
    {

    }

    public List<ProjectModel> findAll()
    {
        return null;
    }
}
