package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IMeasurementRepository extends JpaRepository<Measurement, UUID>
{
}