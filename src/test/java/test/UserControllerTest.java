package test;

import environmentalDataLogging.entities.User;
import org.junit.Test;

/**
 * Created by 631152 on 1/22/2016.
 */
public class UserControllerTest extends BaseTest
{
    @Test
    public void test()
    {
        User user = userRepository.findByEmail("admin@gmail.com");

        //userService.delete(user.getId());
    }
}

