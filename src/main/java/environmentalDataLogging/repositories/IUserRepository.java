package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.User;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface User repository.
 */
@Transactional
public interface IUserRepository extends IBaseRepository<User>
{
    /**
     * Find by email user.
     *
     * @param email the email
     * @return the user
     */
    User findByEmail(String email);
}
