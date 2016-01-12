package environmentalDataLogging.services;

import environmentalDataLogging.entities.Role;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * The Seed Service loads the test data
 */
@Service
public class SeedService extends BaseService
{
	/**
	 * When the updatedSeedData is run, all data will be restored to the original data
	 *
	 * @return the int is the number of records that were added to the database
	 */
	public int updateSeedData()
	{
		// Roles
		Role adminRole = new Role(RoleType.ADMIN);
		Role userRole = new Role(RoleType.USER);

		roleRepository.saveAndFlush(adminRole);
		roleRepository.saveAndFlush(userRole);

		// Users
		Set<Role> roles = new HashSet<>();

		roles.add(adminRole);
		roles.add(userRole);
		userRepository.saveAndFlush(new User("Admin", "Admin", "admin@gmail.com", "password", Status.ACTIVE, roles));

		roles.clear();
		roles.add(userRole);
		userRepository.saveAndFlush(new User("Fred", "Wilson", "fredwilson@gmail.com", "password", Status.ACTIVE, roles));
		return 0;
	}
}
