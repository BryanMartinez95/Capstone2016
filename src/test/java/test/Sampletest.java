package test;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.Date;

/**
 * Created by 631152 on 1/13/2016.
 */
public class SampleTest extends BaseTest
{
    Sample sample1;
    Sample sample2;
    Sample sample3;
    Sample sample4;
    Date date;

    private static boolean setUpIsDone = false;

    @Before
    public void setupStatic()
    {
        Device device = Mockito.mock(Device.class);
        Project project = Mockito.mock(Project.class);
        date = new Date();
        sample1 = new Sample("TST1512A001",date,Status.ACTIVE,device,project);
        sample2 = new Sample("TST1512A002",date,Status.ACTIVE,device,project);
        sample3 = new Sample("TST1512A003",date,Status.ACTIVE,device,project);
        sample4 = new Sample("TST1512A004",date, Status.ACTIVE,device,project);

        setup();
    }

    private void setup()
    {
        if(setUpIsDone)
        {
            return;
        }
        sampleRepository.saveAndFlush(sample1);
        sampleRepository.saveAndFlush(sample2);
        sampleRepository.saveAndFlush(sample3);
        sampleRepository.saveAndFlush(sample4);

        setUpIsDone = true;
    }

    @Test
    public void sampletest1namehere()
    {

        Assert.assertEquals(true,false);
    }
    @Test
    public void sampletest2namehere()
    {

        Assert.assertEquals(true,false);

    }
}
