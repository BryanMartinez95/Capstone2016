package test.parsingTests;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.EnvironmentalDataLoggingApplication;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.IMeasurementRepository;
import org.junit.Before;
import org.junit.BeforeClass;
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
import test.testingTemplates.TestContextConfiguration;

@EnableJpaRepositories("environmentalDataLogging.repositories")
@RunWith(SpringJUnit4ClassRunner.class)
//runs spring with configurations inside this class
@SpringApplicationConfiguration(EnvironmentalDataLoggingApplication.class)
public class DBTest {

    @Autowired
    IDeviceRepository deviceRepository;

    @Autowired
    IMeasurementRepository measurementRepository;
    @BeforeClass
    public static void setupStatic()
    {

    }

    @Before
    public void setup()
    {

    }

    @Test
    public void test1()
    {

        System.out.println("hello");
    }

    @Test
    @Ignore
    public void test2(){
        System.out.println("Ignore me pls");
    }
}
