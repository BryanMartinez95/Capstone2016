package test;

import environmentalDataLogging.entities.User;
import org.junit.Test;

public class UserControllerTest extends BaseTest
{
    @Test
    public void test()
    {
        User user = userRepository.findByEmail("admin@gmail.com");

        //userService.delete(user.getId());
    }
}

