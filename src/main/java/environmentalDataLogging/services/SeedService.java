package environmentalDataLogging.services;

import environmentalDataLogging.entities.Sample;
import org.springframework.stereotype.Service;

@Service
public class SeedService extends BaseService
{
    public int updateSeedData()
    {
        Sample sample = new Sample();
        sample.setLabSampleId("TST1512A001");
        

        return 0;
    }
}
