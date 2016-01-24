package environmentalDataLogging.services;

import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import java.util.List;
import java.util.Set;

import org.springframework.security.access.method.P;
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
      //  createClients();
       // createInvestigators();
       // createProjects();
       // createSamples();
       // createSampleIdentifiers();
        return 0;
	}

    public void clearDatabase()
    {
        List<User> users = userRepository.findAll();
        List<Device> devices= deviceRepository.findAll();
        List<Unit> units = unitRepository.findAll();
        List<Method> methods = methodRepository.findAll();
        List<Measurement> measurements = measurementRepository.findAll();
        List<Client> clients = clientRepository.findAll();
        List<Investigator> investigators = investigatorRepository.findAll();
        List<Project> projects = projectRepository.findAll();
        List<Sample> samples = sampleRepository.findAll();
        List<SampleIdentifier> sampleIdentifiers= sampleIdentifierRepository.findAll();

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
        for(Client client:clients)
        {

        }
        for(Investigator investigator: investigators)
        {

        }
        for(Sample sample:samples)
        {

        }
        for(SampleIdentifier sampleIdentifier:sampleIdentifiers)
        {

        }
        for(Project project:projects)
        {

        }
        for (Device device : devices)
        {
            deviceRepository.delete(device);
        }
        for (User user : users)
        {
            userRepository.delete(user);
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
        Measurement measurement = new Measurement(20.2,methodRepository.findByName("tc"),unitRepository.findByName("mg/l"));
        Measurement measurement1 = new Measurement(30.2,methodRepository.findByName("toc"),unitRepository.findByName("mg/l"));
        measurementRepository.saveAndFlush(measurement);
        measurementRepository.saveAndFlush(measurement1);
    }
    public void createClients()
    {
        Client client = new Client();
        Client client1 = new Client();
        Client client2 = new Client();
        clientRepository.saveAndFlush(client);
        clientRepository.saveAndFlush(client1);
        clientRepository.saveAndFlush(client2);
    }
    public void createInvestigators()
    {
        Investigator investigator1 = new Investigator();
        Investigator investigator2 = new Investigator();
        Investigator investigator3 = new Investigator();
        investigatorRepository.saveAndFlush(investigator1);
        investigatorRepository.saveAndFlush(investigator2);
        investigatorRepository.saveAndFlush(investigator3);
    }
    public void createProjects()
    {
        Project project = new Project();
        Project project1 = new Project();
        Project project2 = new Project();
        projectRepository.saveAndFlush(project);
        projectRepository.saveAndFlush(project1);
        projectRepository.saveAndFlush(project2);

    }
    public void createSamples()
    {
        Sample sample = new Sample();
        Sample sample1 = new Sample();
        Sample sample2 = new Sample();
        sampleRepository.saveAndFlush(sample);
        sampleRepository.saveAndFlush(sample1);
        sampleRepository.saveAndFlush(sample2);
    }
    public void createSampleIdentifiers()
    {
        SampleIdentifier sampleIdentifier = new SampleIdentifier();
        SampleIdentifier sampleIdentifier1 = new SampleIdentifier();
        SampleIdentifier sampleIdentifier2 = new SampleIdentifier();
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier1);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier2);
    }

}
