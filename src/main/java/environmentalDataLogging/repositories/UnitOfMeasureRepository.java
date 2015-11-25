package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.UnitOfMeasure;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitOfMeasureRepository extends JpaRepository<UnitOfMeasure, UUID>
{
}
