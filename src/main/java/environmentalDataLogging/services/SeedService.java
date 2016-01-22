package environmentalDataLogging.services;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import org.springframework.stereotype.Service;

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


		User admin = new User("Admin", "Admin", "admin@gmail.com", "password", Status.ACTIVE, RoleType.ADMIN);
		User user = new User("Fred", "Wilson", "fredwilson@gmail.com", "password", Status.ACTIVE, RoleType.USER);
		Device manual = new Device("Manual Input",);
		//Device toc = new Device("TOC/TN");
		//Device icp = Device("ICP);
		userRepository.saveAndFlush(admin);
		userRepository.saveAndFlush(user);

		return 0;
	}
}
