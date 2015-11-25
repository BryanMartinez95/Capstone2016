package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasurementRepository  extends JpaRepository<Measurement, UUID>
{
}
