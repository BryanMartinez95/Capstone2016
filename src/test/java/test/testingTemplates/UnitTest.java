package test.testingTemplates;


import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.implementations.UserService;
import environmentalDataLogging.services.interfaces.IUserService;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.junit.Assert.*;
import static org.mockito.Matchers.any;

/**
 * A quick demo of userService testing, userService is dependent on the
 * repositories so we will 'Mock' the repositories
 */
@RunWith(MockitoJUnitRunner.class)
public class UnitTest
{
    //telling the userService to autowire the mock userRepository
    @InjectMocks
    IUserService userService = new UserService();

    //user repository mock
    @Mock
    IUserRepository userRepository;

    User user;

    /**
     * setupStatic runs ONCE
     */
    @BeforeClass
    public static void setupStatic()
    {

    }

    /**
     * setup runs before every individual test
     */
    @Before
    public void setup()
    {
        user = new User("admin","adminLast","admin@gmail.com","password",Status.ACTIVE,RoleType.ADMIN);
    }

    /** For the purposes of this test, all we care about is that when the userService.findByEmail is called,
     * the method will call the repository and return a user object, we do not care if the repository is actually
     * returning a valid user
     */
    @Test
    //@Ignore useful annotation if you want to ignore specific tests
    public void findByEmailTest()
    {
        //when the userRepository calls save and flush we force it to return user
        Mockito.when(userRepository.findByEmail("admin@gmail.com")).thenReturn(user);

        //execution
        User user1 =  userService.findByEmail("admin@gmail.com");

        //verifies that the userRepository was called in the execution of code
        Mockito.verify(userRepository).findByEmail("admin@gmail.com");

        //user1 is equal to original user
        assertEquals(user,user1);
    }

}
