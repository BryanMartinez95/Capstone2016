package test.reportTesting;


import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.reports.ReportBuilder;
import environmentalDataLogging.repositories.IProjectRepository;
import environmentalDataLogging.repositories.ISampleIdentifierRepository;
import environmentalDataLogging.repositories.ISampleRepository;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import test.testingTemplates.TestContextConfiguration;

import java.time.LocalDate;
import java.util.*;
@RunWith(SpringJUnit4ClassRunner.class)

@EnableScheduling
//runs spring with configurations inside this class
@SpringApplicationConfiguration(classes = TestContextConfiguration.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ReportTest {

    List<Sample> samples;

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    ISampleRepository sampleRepository;


    @Before
    public void setup()
    {
        samples = new ArrayList<>();
        Sample sample = new Sample("123",new Date(), Status.ACTIVE,new Device(),"test",LocalDate.now(), UUID.randomUUID());
        Sample sample1 = new Sample("123",new Date(), Status.ACTIVE,new Device(),"test",LocalDate.now(), UUID.randomUUID());
        Sample sample2 = new Sample("123",new Date(), Status.ACTIVE,new Device(),"test",LocalDate.now(), UUID.randomUUID());
        Sample sample3 = new Sample("123",new Date(), Status.ACTIVE,new Device(),"test",LocalDate.now(), UUID.randomUUID());
        Sample sample4 = new Sample("123",new Date(), Status.ACTIVE,new Device(),"test",LocalDate.now(), UUID.randomUUID());
        Measurement measurement = new Measurement(12.3,new TestMethod("ag320"),new Unit("cm"),Status.ACTIVE, new Date());
        Measurement measurement1 = new Measurement(7,new TestMethod("ph"),new Unit("ff"),Status.ACTIVE, new Date());
        Measurement measurement2 = new Measurement(1132.3,new TestMethod("ag320"),new Unit("cm"),Status.ACTIVE, new Date());
        Measurement measurement3 = new Measurement(112.3,new TestMethod("Ba327"),new Unit("cm"),Status.ACTIVE, new Date());
        Measurement measurement4 = new Measurement(-12.3,new TestMethod("ag320"),new Unit("cm"),Status.ACTIVE, new Date());
        Measurement measurement5 = new Measurement(1.3,new TestMethod("ag320"),new Unit("cm"),Status.ACTIVE, new Date());
        List<Measurement> measurementList = new ArrayList<>();
        measurementList.add(measurement);
        measurementList.add(measurement1);
        measurementList.add(measurement2);
        List<Measurement> measurementList1 = new ArrayList<>();
        measurementList.add(measurement3);
        measurementList.add(measurement2);
        measurementList.add(measurement1);
        measurementList.add(measurement4);
        measurementList.add(measurement);
        List<Measurement> measurementList3 = new ArrayList<>();
        measurementList.add(measurement1);
        measurementList.add(measurement5);
        sample.setMeasurements(new HashSet<Measurement>(measurementList1));
        sample1.setMeasurements(new HashSet<Measurement>(measurementList1));
        sample2.setMeasurements(new HashSet<Measurement>(measurementList3));
        sample3.setMeasurements(new HashSet<Measurement>(measurementList3));
        sample4.setMeasurements(new HashSet<Measurement>(measurementList));
        samples.add(sample);
        samples.add(sample1);
        samples.add(sample2);
        samples.add(sample3);
        samples.add(sample4);
    }

    @Test
   // @Ignore
    public void test1()
    {
        Project project= projectRepository.findByName("Project1");
        ReportBuilder reportBuilder = new ReportBuilder();
        reportBuilder.build(project);
    }

    @Test
    @Ignore
    public void testdb()
    {
        Sample sample = sampleRepository.findByLabId("CVE1504A003");
        Sample sample1 = sampleRepository.findByLabId("CVE1508A006");
        Sample sample2 = sampleRepository.findByLabId("AOP1406B008b");
        Sample sample3 = sampleRepository.findByLabId("AOP1406B012a");
        Sample sample4 = sampleRepository.findByLabId("AOP1406B003a");
        Project project = projectRepository.findByName("Project1");
        List<Sample> samples = new ArrayList<>(project.getSamples());
        samples.add(sample);
        samples.add(sample1);
        samples.add(sample2);
        samples.add(sample3);
        samples.add(sample4);
        project.setSamples(new HashSet<Sample>(samples));
        projectRepository.saveAndFlush(project);
        sample.setProject(project);
        sample1.setProject(project);
        sample2.setProject(project);
        sample3.setProject(project);
        sample4.setProject(project);

        sampleRepository.saveAndFlush(sample);
        sampleRepository.saveAndFlush(sample1);
        sampleRepository.saveAndFlush(sample2);
        sampleRepository.saveAndFlush(sample3);
        sampleRepository.saveAndFlush(sample4);




    }
}
