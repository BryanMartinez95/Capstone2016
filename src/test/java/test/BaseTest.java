package test;


import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.EnvironmentalDataLoggingApplication;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.services.implementations.UserService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

/**
 * Created by 631152 on 1/12/2016.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class BaseTest
{

    @Autowired
    IClientRepository IClientRepository;

    @Autowired
    IDeviceRepository IDeviceRepository;

    @Autowired
    IMeasurementRepository measurementRepository;

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    ISampleIdentifierRepository sampleIdentifierRepository;

    @Autowired
    ISampleRepository sampleRepository;

    @Autowired
    IMethodRepository methodRepository;

    @Autowired
    IUnitRepository unitRepository;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IInvestigatorRepository investigatorRepository;


    @Autowired
    UserService userService;





}
