package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.services.interfaces.ISeedService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * The Seed Service loads the test data
 */
@RestController
@Service
public class SeedService implements ISeedService
{
    @Autowired
    IUserRepository userRepository;

    @Autowired
    IDeviceRepository IDeviceRepository;

    @Autowired
    IUnitRepository unitRepository;

    @Autowired
    IMethodRepository methodRepository;

    @Autowired
    IMeasurementRepository measurementRepository;

    @Autowired
    IClientRepository IClientRepository;

    @Autowired
    IInvestigatorRepository investigatorRepository;

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    ISampleRepository sampleRepository;

    @Autowired
    ISampleIdentifierRepository sampleIdentifierRepository;

    @RequestMapping(value = "/Api/SeedData")
	public int updateSeedData()
	{
        clearDatabase();
        createUsers();
        createDevices();
        createUnits();
        createMethods();
        createMeasurements();
        createClients();
        createInvestigators();
        createProjects();
        createSamples();
        createSampleIdentifiers();
        return 0;
	}

    public void clearDatabase()
    {
        List<User> users = userRepository.findAll();
        List<Device> devices= IDeviceRepository.findAll();
        List<Unit> units = unitRepository.findAll();
        List<Method> methods = methodRepository.findAll();
        List<Measurement> measurements = measurementRepository.findAll();
        List<Client> clients = IClientRepository.findAll();
        List<Investigator> investigators = investigatorRepository.findAll();
        List<Project> projects = projectRepository.findAll();
        List<Sample> samples = sampleRepository.findAll();
        List<SampleIdentifier> sampleIdentifiers= sampleIdentifierRepository.findAll();

        for(Client client:clients)
        {
            IClientRepository.delete(client);
        }
        for(Investigator investigator: investigators)
        {
            investigatorRepository.delete(investigator);
        }
        for(Sample sample:samples)
        {
            sampleRepository.delete(sample);
        }
        for(SampleIdentifier sampleIdentifier:sampleIdentifiers)
        {
            sampleIdentifierRepository.delete(sampleIdentifier);
        }
        for(Project project:projects)
        {
            projectRepository.delete(project);
        }
        for (Device device : devices)
        {
            IDeviceRepository.delete(device);
        }
        for (Measurement measurement : measurements)
        {
            measurementRepository.delete(measurement);
        }
        for (Unit unit : units)
        {
            unitRepository.delete(unit);
        }
        for (Method method : methods)
        {
            methodRepository.delete(method);
        }
        for (User user : users)
        {
            userRepository.delete(user);
        }

    }

    public void createUsers()
    {
        User fred = new User("Fred", "Wilson", "fredwilson@gmail.com", Status.ACTIVE, "password", RoleType.USER);
        User admin = new User("Admin", "Admin", "admin@gmail.com", Status.ACTIVE, "password", RoleType.ADMIN);
        userRepository.saveAndFlush(admin);
        userRepository.saveAndFlush(fred);

        JSONParser parser = new JSONParser();
        try {

            Object obj = parser.parse(new FileReader("resource/seedData.txt"));
            JSONObject jsonObject = (JSONObject) obj;

            List<Object> userList = (List<Object>) jsonObject.get("data");
            for(int i=0;userList.size()>i;i++)
            {
                JSONArray jsonArray = (JSONArray) userList.get(i);
                User user = new User((String)jsonArray.get(0),(String)jsonArray.get(1),(String)jsonArray.get(2),Status.valueOf((String) jsonArray.get(3)),(String)jsonArray.get(4),RoleType.valueOf((String) jsonArray.get(5)));
                userRepository.saveAndFlush(user);
            }
        } catch (IOException|ParseException e) {
            e.printStackTrace();
        }

    }

    public void createDevices()
    {
        Device device1 = new Device("TOC/TC",Status.ACTIVE);
        Device device2 = new Device("ICP",Status.ACTIVE);
        Device device3 = new Device("Manual Input",Status.ACTIVE);
        IDeviceRepository.saveAndFlush(device1);
        IDeviceRepository.saveAndFlush(device2);
        IDeviceRepository.saveAndFlush(device3);
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
        Client client = new Client("Mario","SAIT","403-123-1234","mario@gmail.ca",Status.ACTIVE,"123 abc street",
                "plumber");
        Client client1 = new Client("Luigi",Status.ACTIVE);
        Client client2 = new Client("Bowser", Status.INACTIVE);
        IClientRepository.saveAndFlush(client);
        IClientRepository.saveAndFlush(client1);
        IClientRepository.saveAndFlush(client2);
    }
    public void createInvestigators()
    {
        Investigator investigator1 = new Investigator("Dr.tim",Status.ACTIVE);
        Investigator investigator2 = new Investigator("Sherlock","403-1223-1234","sherlock@holmes.ca",Status.ACTIVE,
                "detective");
        Investigator investigator3 = new Investigator("bobby",Status.INACTIVE);
        investigatorRepository.saveAndFlush(investigator1);
        investigatorRepository.saveAndFlush(investigator2);
        investigatorRepository.saveAndFlush(investigator3);
    }
    public void createProjects()
    {
        Date date = new Date();
        Project project = new Project("1234","Project1",date,Status.ACTIVE);
        Project project1 = new Project("1002","Project2",date,Status.ACTIVE);
        Project project2 = new Project("1003","Project3",date,Status.INACTIVE);
        projectRepository.saveAndFlush(project);
        projectRepository.saveAndFlush(project1);
        projectRepository.saveAndFlush(project2);

    }
    public void createSamples()
    {
        Date date = new Date();
        Sample sample = new Sample("1239",date,Status.ACTIVE, IDeviceRepository.findByName("TOC/TC"),projectRepository
                .findByName("Project1"));
        Sample sample1 = new Sample("1234",date,Status.INACTIVE, IDeviceRepository.findByName("Manual Input"),projectRepository
                .findByName("Project2"));
        Sample sample2 = new Sample("1001",date,Status.ACTIVE, IDeviceRepository.findByName("ICP"),projectRepository
                .findByName("Project1"));
        sampleRepository.saveAndFlush(sample);
        sampleRepository.saveAndFlush(sample1);
        sampleRepository.saveAndFlush(sample2);
    }
    public void createSampleIdentifiers()
    {
        Date date = new Date();
        SampleIdentifier sampleIdentifier = new SampleIdentifier("SAIT","0909","1234");
        Sample sample = sampleRepository.findByLabId("1239");
        sample.setSampleIdentifier(sampleIdentifier);
        SampleIdentifier sampleIdentifier1 = new SampleIdentifier("SAIT","0909","1234");
        Sample sample2 = sampleRepository.findByLabId("1234");
        sample2.setSampleIdentifier(sampleIdentifier1);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier1);
    }

}
