//package test;
//
//import environmentalDataLogging.entities.User;
//import environmentalDataLogging.enums.RoleType;
//import environmentalDataLogging.enums.Status;
//
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Ignore;
//import org.junit.Test;
//
//import java.util.List;
//import java.util.UUID;
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
//
////        admin = new User("Admin", "Admin", "admin@gmail.com","password", Status.ACTIVE, RoleType.ADMIN);
////        fred = new User(UUID.fromString("a55f4758-9649-4956-8574-453311986720"),"Fred", "Wilson", "fredwilson@gmail.com",
////                "password", Status.ACTIVE, RoleType.USER);
////        admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
////        fred = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
//
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
//    @Ignore
//    public void deleteUser()
//    {
//        fred = userRepository.findByEmail("fredwilson@gmail.com");
//        userRepository.delete(fred);
//        List list = userRepository.findAll();
//
//        Assert.assertEquals(1,list.size());
//    }
//    @Test
//    @Ignore
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
//    @Ignore
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
//
//    @Test
//    public void findByUUID()
//    {
//        fred = userRepository.findByEmail("fredwilson@gmail.com");
//        admin = userRepository.findByEmail("admin@gmail.com");
//        System.out.println("FRED:"+fred.getId());
//        System.out.println("ADMIN:"+admin.getId());
//        User fred2 = userRepository.findOne(fred.getId());
//        User admin2 = userRepository.findOne(admin.getId());
//        System.out.println("FRED2:"+fred2.getId());
//        System.out.println("ADMIN2:"+admin2.getId());
//
//
//    }
//}
