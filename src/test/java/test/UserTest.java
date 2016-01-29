//package test;
//
//import environmentalDataLogging.entities.User;
//import environmentalDataLogging.enums.RoleType;
//import environmentalDataLogging.enums.Status;
//
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//
//import java.util.List;
//
///**
// * Created by 631152 on 1/13/2016.
// */
//public class UserTest extends BaseTest
//{
//    private static boolean setUpIsDone = false;
//    User admin;
//    User fred;
//
//
//    @Before
//    public void setupStatic()
//    {
//        admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
//        fred = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
//        setup();
//    }
//
//
//    private void setup()
//    {
//        if(setUpIsDone)
//        {
//            return;
//        }
//        userRepository.saveAndFlush(fred);
//        userRepository.saveAndFlush(admin);
//        setUpIsDone = true;
//    }
//
//    @Test
//    public void deleteUser()
//    {
//        fred = userRepository.findByEmail("fredwilson@gmail.com");
//        userRepository.delete(fred);
//        List list = userRepository.findAll();
//
//        Assert.assertEquals(1,list.size());
//    }
//    @Test
//    public void updateUser()
//    {
//        admin = userRepository.findByEmail("admin@gmail.com");
//        admin.setFirstName("Bryan");
//        userRepository.saveAndFlush(admin);
//        User toFind = userRepository.findByEmail("admin@gmail.com");
//        Assert.assertEquals("Bryan",toFind.getFirstName());
//
//    }
//    @Test
//    public void emailsTest()
//    {
//        admin = userRepository.findByEmail("admin@gmail.com");
//        fred = userRepository.findByEmail("fredwilson@gmail.com");
//
//        admin.setEmail("admin@gmail.com");
//        userRepository.saveAndFlush(admin);
//        List list = userRepository.findAll();
//
//        Assert.assertEquals(2,list.size());
//    }
//}
