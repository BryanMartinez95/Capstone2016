package test.IntegrationTesting.entities;

import environmentalDataLogging.entities.Investigator;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by 631152 on 1/13/2016.
 */
public class InspectorTest// extends BaseTest
{
    private static boolean setUpIsDone = false;
    Investigator dave;
    Investigator john;
    @Before
    public void setupStatic()
    {
        dave = new Investigator();
        john = new Investigator();
        setup();
    }

    private void setup()
    {
        if(setUpIsDone)
        {
            return;
        }
       // investigatorRepository.saveAndFlush(dave);
        //investigatorRepository.saveAndFlush(john);
        setUpIsDone = true;
    }

    @Test
    public void deleteInvestigator()
    {
        Assert.assertEquals(true,false);
    }
    @Test
    public void updateInvestigator()
    {
        Assert.assertEquals(true,false);

    }
    @Test
    public void emailsTest()
    {
        Assert.assertEquals(true,false);
    }
}
