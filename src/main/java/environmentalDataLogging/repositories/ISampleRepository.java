package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ISampleRepository extends JpaRepository<Sample, UUID>
{
    Sample findByLabId(String labId);
}
