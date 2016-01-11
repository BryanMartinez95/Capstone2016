package environmentalDataLogging.repositories;


import environmentalDataLogging.entities.SampleId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SampleIdRepository extends JpaRepository<SampleId, UUID> {
}

