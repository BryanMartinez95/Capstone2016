package environmentalDataLogging.services;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.User;
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
        Sample sample = new Sample();
        sample.setLabSampleId("TST1512A001");

//        User user = new User();

        return 0;
    }
}
