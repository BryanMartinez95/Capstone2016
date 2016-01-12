package environmentalDataLogging.configuration;

import environmentalDataLogging.services.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AfterLoadComponent implements CommandLineRunner
{
	@Autowired
	SeedService seedService;

	@Override
	public void run(String... args) throws Exception
	{
		seedService.updateSeedData();

	}
}
