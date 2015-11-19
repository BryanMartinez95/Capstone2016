package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by 186303 on 11/19/2015.
 */
public interface MeasurementRepository  extends JpaRepository<Measurement, UUID>
{
}
