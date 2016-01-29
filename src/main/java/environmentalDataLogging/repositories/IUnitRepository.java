package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IUnitRepository extends JpaRepository<Unit, UUID>
{
    Unit findByName(String name);
}
