package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.ProjectId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProjectIdRepository  extends JpaRepository<ProjectId, UUID>
{
}
