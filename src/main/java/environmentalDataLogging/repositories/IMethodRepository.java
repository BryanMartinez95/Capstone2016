package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Method;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public interface IMethodRepository extends JpaRepository<Method, UUID>
{
    Method findByName(String name);

}
