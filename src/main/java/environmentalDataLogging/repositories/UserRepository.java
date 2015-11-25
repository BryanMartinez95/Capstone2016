package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, UUID>
{
    User findByLastName(@Param("name") String name);

    User findByUserName(String userName);
}
