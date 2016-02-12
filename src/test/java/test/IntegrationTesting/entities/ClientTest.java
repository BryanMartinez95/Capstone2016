package test.IntegrationTesting.entities;


import environmentalDataLogging.entities.Client;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by 631152 on 1/13/2016.
 */
public class ClientTest //extends BaseTest
{
    private static boolean setUpIsDone = false;
    Client adam;
    Client dave;
    @Before
    public void setupStatic()
    {
        adam = new Client();
        dave = new Client();
        setup();
    }

    private void setup()
    {
        if(setUpIsDone)
        {
            return;
        }
        //clientRepository.saveAndFlush(dave);
        //clientRepository.saveAndFlush(adam);
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
