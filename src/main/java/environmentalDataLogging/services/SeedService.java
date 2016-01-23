package environmentalDataLogging.services;

import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import java.util.List;
import java.util.Set;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The Seed Service loads the test data
 */
@RestController
@Service
public class SeedService extends BaseService
{
    @RequestMapping(value = "/SeedData")
	public int updateSeedData()
	{
        clearDatabase();
        createUsers();
        createDevices();
        createUnits();
        createMethods();
        createMeasurements();


        System.out.println("test");
        return 0;
	}

    public void clearDatabase()
    {
        List<User> users = userRepository.findAll();
        List<Device> devices= deviceRepository.findAll();
        List<Unit> units = unitRepository.findAll();
        List<Method> methods = methodRepository.findAll();
        List<Measurement> measurements = measurementRepository.findAll();
        for (User user : users)
        {
            userRepository.delete(user);
        }

        for (Device device : devices)
        {
            deviceRepository.delete(device);
        }
        for (Unit unit : units)
        {
            unitRepository.delete(unit);
        }
        for (Method method : methods)
        {
            methodRepository.delete(method);
        }
        for (Measurement measurement : measurements)
        {
            measurementRepository.delete(measurement);
        }

    }

    public void createUsers()
    {
        User admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
        userRepository.saveAndFlush(admin);

        User user = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
        userRepository.saveAndFlush(user);
    }
    public void createDevices()
    {
        Device device1 = new Device("TOC/TC",Status.ACTIVE);
        Device device2 = new Device("ICP",Status.ACTIVE);
        Device device3 = new Device("Manual Input",Status.ACTIVE);
        deviceRepository.saveAndFlush(device1);
        deviceRepository.saveAndFlush(device2);
        deviceRepository.saveAndFlush(device3);
    }
    public void createUnits()
    {

        Unit unit = new Unit("mg/l");
        Unit unit1 = new Unit("ph");
        Unit unit2 = new Unit("g/cm^3" );
        Unit unit3 = new Unit("ms/cm");
        Unit unit4 = new Unit("s/cm");
        unitRepository.saveAndFlush(unit);
        unitRepository.saveAndFlush(unit1);
        unitRepository.saveAndFlush(unit2);
        unitRepository.saveAndFlush(unit3);
        unitRepository.saveAndFlush(unit4);

    }
    public void createMethods()
    {
        Method method = new Method("tc");
        Method method1 = new Method("ic");
        Method method2 = new Method("toc");
        methodRepository.saveAndFlush(method);
        methodRepository.saveAndFlush(method1);
        methodRepository.saveAndFlush(method2);
    }

    public void createMeasurements()
    {
        Measurement measurement = new Measurement(20.2,methodRepository.findByName("tc"),unitRepository.findByName
                ("mg/l"));
        Measurement measurement1 = new Measurement(30.2,methodRepository.findByName("toc"),unitRepository.findByName
                ("mg/l"));
        measurementRepository.saveAndFlush(measurement);
        measurementRepository.saveAndFlush(measurement1);
    }
}
