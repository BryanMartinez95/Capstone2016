package environmentalDataLogging.repositories;



import environmentalDataLogging.entities.SampleIdentifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SampleIdentifierRepository extends JpaRepository<SampleIdentifier, UUID> {
}

