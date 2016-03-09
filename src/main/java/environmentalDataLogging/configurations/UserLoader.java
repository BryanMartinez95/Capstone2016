package environmentalDataLogging.configurations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserLoader implements CommandLineRunner
{
    @Autowired
    IUserRepository userRepository;

    @Override
    public void run(String... args) throws Exception
    {
        User user = userRepository.findByEmail("admin@gmail.com");

        if (user == null)
        {
            userRepository.saveAndFlush(new User("admin", "admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN));
            userRepository.saveAndFlush(new User("SYSTEM", "SYSTEM", "SYSTEM", Status.ACTIVE, "SYSTEM", RoleType.SYSTEM));
        }
    }
}
