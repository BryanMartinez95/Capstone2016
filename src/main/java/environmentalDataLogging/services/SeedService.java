package environmentalDataLogging.services;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

/**
 * The Seed Service loads the test data
 */
@RestController
@Service
public class SeedService
{
//    @Autowired
//    BaseRepository<User, UUID> userRepository;
//
//    @RequestMapping(value = "/SeedData")
//	public int updateSeedData()
//	{
//        clearDatabase();
//        createUsers();
//
//
//		return 0;
//	}
//
//    public void clearDatabase()
//    {
//        List<User> users = userRepository.findAll();
//        for (User user : users)
//        {
//            userRepository.delete(user);
//        }
//
//    }
//
//    public void createUsers()
//    {
//
//        User admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
//        userRepository.saveAndFlush(admin);
//
//        User user = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
//        userRepository.saveAndFlush(user);
//    }
}
