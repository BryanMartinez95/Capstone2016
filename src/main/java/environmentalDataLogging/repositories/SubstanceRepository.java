package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Substance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public interface SubstanceRepository extends JpaRepository<Substance, UUID>
{
}
