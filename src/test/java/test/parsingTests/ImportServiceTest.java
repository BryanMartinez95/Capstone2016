package test.parsingTests;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.EnvironmentalDataLoggingApplication;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.services.implementations.ImportService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@EnableJpaRepositories("environmentalDataLogging.repositories")
@EnableTransactionManagement
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ImportServiceTest
{

    @Autowired
    ImportService importService;

    List<Sample> samples;

    boolean succeeded;
    @Before
    public void setup()

    {
        samples = new ArrayList<>();
    }
    @Test
    @Ignore
    public void deviceSelector1ICTest()
    {
        File file = new File("resource/dataFiles/IC Export.csv");
        try
        {
            succeeded = importService.deviceController(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }

    }

    @Test
    @Ignore
    public void deviceICPTest()
    {
        File file = new File("resource/dataFiles/ICP_CSV.csv");
        try
        {
            succeeded = importService.deviceController(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }

    }
    @Test
    @Ignore
    public void deviceTOCTest()
    {
        File file = new File("resource/dataFiles/TOC Tab Separated.txt");
        try
        {
            succeeded = importService.deviceController(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }

    }

    @Test
   // @Ignore
    public void deviceTNTest()
    {
        File file = new File("resource/dataFiles/TN Tab Separated.txt");
        try
        {
            succeeded = importService.deviceController(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }
    }




}
