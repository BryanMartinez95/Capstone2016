package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Project;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Project repository.
 */
@Transactional
public interface IProjectRepository extends IBaseRepository<Project>
{
    /**
     * Find by name project.
     *
     * @param name the name
     * @return the project
     */
    Project findByName(String name);
}
