//package test;
//
//import environmentalDataLogging.entities.Location;
//import environmentalDataLogging.enums.Status;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//
//import java.util.List;
//
///**
// * Created by 631152 on 1/13/2016.
// */
//public class LocationTest extends BaseTest
//{
//    Location sait;
//
//    private static boolean setUpIsDone = false;
//
//    @Before
//    public void setupStatic()
//    {
//        sait = new Location("SAIT PolyTechnic", Status.ACTIVE);
//        setup();
//    }
//
//    private void setup()
//    {
//        if(setUpIsDone)
//        {
//            return;
//        }
//        locationRepository.saveAndFlush(sait);
//        setUpIsDone = true;
//    }
//
//    @Test
//    public void deleteLocation()
//    {
//        sait = locationRepository.findByName("SAIT");
//        locationRepository.delete(sait);
//        List list = locationRepository.findAll();
//        Assert.assertEquals(0,list.size());
//    }
//    @Test
//    public void updateLocation()
//    {
//        sait = locationRepository.findByName("SAIT PolyTechnic");
//        sait.setName("SAIT");
//        locationRepository.saveAndFlush(sait);
//        sait =locationRepository.findByName("SAIT");
//
//        Assert.assertEquals("SAIT",sait.getName());
//
//    }
//}
