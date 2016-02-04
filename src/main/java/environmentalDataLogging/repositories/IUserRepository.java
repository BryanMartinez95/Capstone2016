package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.User;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IUserRepository extends IBaseRepository<User>
{
    User findByEmail(String email);
}
