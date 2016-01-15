package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Investigator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
    public interface InvestigatorRepository extends JpaRepository<Investigator, UUID>
{
}
