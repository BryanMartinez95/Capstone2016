package environmentalDataLogging.services;

import environmentalDataLogging.entities.Alias;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import java.util.List;
import java.util.Set;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The Seed Service loads the test data
 */
@RestController
@Service
public class SeedService extends BaseService
{
    @RequestMapping(value = "/SeedData")
	public int updateSeedData()
	{
        clearDatabase();
        createUsers();


		return 0;
	}

    public void clearDatabase()
    {
        List<User> users = userRepository.findAll();
        for (User user : users)
        {
            userRepository.delete(user);
        }

    }

    public void createUsers()
    {
        User admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
        userRepository.saveAndFlush(admin);

        User user = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
        userRepository.saveAndFlush(user);

        userRepository.saveAndFlush(new User("Ted", "Simpson", "tedsimpson@yahoo.ca", Status.ACTIVE, "password", RoleType.USER));
        userRepository.saveAndFlush(new User("Mike", "Davidson", "mikedavidson@gmail.com", Status.ACTIVE, "password", RoleType.USER));
    }
}
