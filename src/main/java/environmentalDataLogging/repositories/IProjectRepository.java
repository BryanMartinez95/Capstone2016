package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IProjectRepository extends JpaRepository<Project, UUID>
{
    Project findByName(String name);
}