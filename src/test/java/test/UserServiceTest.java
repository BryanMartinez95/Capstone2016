package test;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.EnvironmentalDataLoggingApplication;
import environmentalDataLogging.services.implementations.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
		TransactionalTestExecutionListener.class,
		DbUnitTestExecutionListener.class})
public class UserServiceTest
{
	@Before
	public void setUp()
	{

	}

	@Test
	public void test1()
	{

	}
}
