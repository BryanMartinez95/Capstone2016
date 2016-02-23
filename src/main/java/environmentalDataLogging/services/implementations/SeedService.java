package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.services.interfaces.ISeedService;
import environmentalDataLogging.services.interfaces.IUserService;
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
    IUserService userService;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IDeviceRepository deviceRepository;

    @Autowired
    IUnitRepository unitRepository;

    @Autowired
    ITestMethodRepository testMethodRepository;

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

    JSONParser parser ;

    @RequestMapping(value = "/Api/SeedData")
    public int updateSeedData()
    {
        clearDatabase();
        createUsers();
        createDevices();
        createUnits();
        createTestMethods();
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
        List<Device> devices = deviceRepository.findAll();
        List<Unit> units = unitRepository.findAll();
        List<TestMethod> testMethods = testMethodRepository.findAll();
        List<Measurement> measurements = measurementRepository.findAll();
        List<Client> clients = IClientRepository.findAll();
        List<Investigator> investigators = investigatorRepository.findAll();
        List<Project> projects = projectRepository.findAll();
        List<Sample> samples = sampleRepository.findAll();
        List<SampleIdentifier> sampleIdentifiers = sampleIdentifierRepository.findAll();


        for ( Client client : clients )
        {
            IClientRepository.delete(client);
        }
        for ( Investigator investigator : investigators )
        {
            investigatorRepository.delete(investigator);
        }
        for ( Sample sample : samples )
        {
            sampleRepository.delete(sample);
        }
        for ( SampleIdentifier sampleIdentifier : sampleIdentifiers )
        {
            sampleIdentifierRepository.delete(sampleIdentifier);
        }
        for ( Project project : projects )
        {
            projectRepository.delete(project);
        }
        for ( Measurement measurement : measurements )
        {
            measurementRepository.delete(measurement);
        }
        for ( TestMethod testMethod : testMethods )
        {
            testMethodRepository.delete(testMethod);
        }
        for ( Device device : devices )
        {
            deviceRepository.delete(device);
        }
        for ( Unit unit : units )
        {
            unitRepository.delete(unit);
        }
        for ( User user : users )
        {
            userRepository.delete(user);
        }
    }

    public void createUsers()
    {
        parser = new JSONParser();
        try
        {
            JSONObject jsonObject = (JSONObject) parser.parse(new FileReader("resource/json/userData.json"));
            List<JSONArray> userList = (List<JSONArray>) jsonObject.get("data");

            for ( JSONArray jsonArray : userList )
            {
                User user = new User(( String ) jsonArray.get(0), ( String ) jsonArray.get(1), ( String ) jsonArray.get(2), Status.valueOf(( String ) jsonArray.get(3)), ( String ) jsonArray.get(4), RoleType.valueOf(( String ) jsonArray.get(5)));
                userRepository.saveAndFlush(user);
            }
        }
        catch ( IOException | ParseException e )
        {
            e.printStackTrace();
        }
    }

    public void createDevices()
    {
        parser = new JSONParser();
        try
        {
            JSONObject jsonObject = (JSONObject) parser.parse(new FileReader("resource/json/deviceData.json"));
            List<JSONArray> deviceList = (List<JSONArray>) jsonObject.get("data");

            for ( JSONArray jsonArray : deviceList )
            {
                Device device = new Device((String)jsonArray.get(0), Status.valueOf(( String ) jsonArray.get(1)));
                deviceRepository.saveAndFlush(device);
            }
        }
        catch ( IOException | ParseException e )
        {
            e.printStackTrace();
        }
    }

    public void createUnits()
    {
        parser = new JSONParser();
        try
        {
            JSONObject jsonObject = (JSONObject) parser.parse(new FileReader("resource/json/unitData.json"));
            List<JSONArray> userList = (List<JSONArray>) jsonObject.get("data");

            for ( JSONArray jsonArray : userList )
            {
                Unit unit = new Unit(( String ) jsonArray.get(0));
                unitRepository.saveAndFlush(unit);
            }
        }
        catch ( IOException | ParseException e )
        {
            e.printStackTrace();
        }
    }

    public void createTestMethods()
    {
        parser = new JSONParser();
        try
        {
            JSONObject jsonObject = (JSONObject) parser.parse(new FileReader("resource/json/testMethodsData.json"));
            List<JSONArray> userList = (List<JSONArray>) jsonObject.get("data");

            for ( JSONArray jsonArray : userList )
            {
                TestMethod testMethod = new TestMethod((String)jsonArray.get(0),deviceRepository.findByName((String)jsonArray.get(1)));
                testMethodRepository.saveAndFlush(testMethod);
            }
        }
        catch ( IOException | ParseException e )
        {
            e.printStackTrace();
        }
    }

    public void createMeasurements()
    {
      //  Measurement measurement = new Measurement(20.2, testMethodRepository.findByName("tc"), unitRepository.findByName("mg/l"));
      //  Measurement measurement1 = new Measurement(30.2, testMethodRepository.findByName("toc"), unitRepository.findByName("mg/l"));
      //  measurementRepository.saveAndFlush(measurement);
      //  measurementRepository.saveAndFlush(measurement1);
    }

    public void createClients()
    {
        Client client = new Client("Mario", "SAIT", "403-123-1234", "mario@gmail.ca", Status.ACTIVE, "123 abc street",
                "plumber");
        Client client1 = new Client("Luigi", Status.ACTIVE);
        Client client2 = new Client("Bowser", Status.INACTIVE);
        IClientRepository.saveAndFlush(client);
        IClientRepository.saveAndFlush(client1);
        IClientRepository.saveAndFlush(client2);
    }

    public void createInvestigators()
    {
        Investigator investigator1 = new Investigator("Dr.tim", Status.ACTIVE);
        Investigator investigator2 = new Investigator("Sherlock", "403-1223-1234", "sherlock@holmes.ca", Status.ACTIVE,
                "detective");
        Investigator investigator3 = new Investigator("bobby", Status.INACTIVE);
        investigatorRepository.saveAndFlush(investigator1);
        investigatorRepository.saveAndFlush(investigator2);
        investigatorRepository.saveAndFlush(investigator3);
    }

    public void createProjects()
    {
        Date date = new Date();
        Project project = new Project("1234", "Project1", date, Status.ACTIVE);
        Project project1 = new Project("1002", "Project2", date, Status.ACTIVE);
        Project project2 = new Project("1003", "Project3", date, Status.INACTIVE);
        projectRepository.saveAndFlush(project);
        projectRepository.saveAndFlush(project1);
        projectRepository.saveAndFlush(project2);

    }

    public void createSamples()
    {
        Date date = new Date();
        Sample sample = new Sample("1239", date, Status.ACTIVE, deviceRepository.findByName("TOC/TN"), projectRepository
                .findByName("Project1"));
        Sample sample1 = new Sample("1234", date, Status.INACTIVE, deviceRepository.findByName("Manual Input"),
                projectRepository
                .findByName("Project2"));
        Sample sample2 = new Sample("1001", date, Status.ACTIVE, deviceRepository.findByName("ICP"), projectRepository
                .findByName("Project1"));
        sampleRepository.saveAndFlush(sample);
        sampleRepository.saveAndFlush(sample1);
        sampleRepository.saveAndFlush(sample2);
    }

    public void createSampleIdentifiers()
    {
        Date date = new Date();
        SampleIdentifier sampleIdentifier = new SampleIdentifier("SAIT", "0909", "1234");
        Sample sample = sampleRepository.findByLabId("1239");
        sample.setSampleIdentifier(sampleIdentifier);
        SampleIdentifier sampleIdentifier1 = new SampleIdentifier("SAIT", "0909", "1234");
        Sample sample2 = sampleRepository.findByLabId("1234");
        sample2.setSampleIdentifier(sampleIdentifier1);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier);
        sampleIdentifierRepository.saveAndFlush(sampleIdentifier1);
    }

}
