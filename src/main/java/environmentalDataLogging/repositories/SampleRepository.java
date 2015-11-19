package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Sample;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SampleRepository extends JpaRepository<Sample, UUID>
{
}
