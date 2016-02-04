package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Project;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IProjectRepository extends IBaseRepository<Project>
{
    Project findByName(String name);
}
