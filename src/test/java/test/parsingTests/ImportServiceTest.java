package test.parsingTests;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.ImportService;
import environmentalDataLogging.services.implementations.UserService;
import environmentalDataLogging.services.interfaces.IUserService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnit44Runner;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
//@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ImportServiceTest
{
    @Autowired
    ISampleRepository sampleRepository;

    @Mock
    IDeviceRepository deviceRepository;

    @InjectMocks
    ImportService importService = new ImportService();
    List<Sample> samples;

    boolean succeeded;
    @Before
    public void setup()

    {
        samples = new ArrayList<>();
    }
    @Test
    //@Ignore
    public void deviceSelector1ICTest()
    {

        try
        {
            succeeded = importService.deviceController("resource/dataFiles/IC Export.csv");
        } catch (IOException e)
        {
            e.printStackTrace();
        }

    }

    @Test
    //@Ignore
    public void deviceICPTest()
    {
        try
        {
            succeeded = importService.deviceController("resource/dataFiles/ICP_CSV.csv");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }

    }
    @Test
    @Ignore
    public void deviceTOCTest()
    {
        try
        {
            succeeded = importService.deviceController("resource/dataFiles/TOC Tab Separated.txt");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }

    }

    @Test
    @Ignore
    public void deviceTNTest()
    {
        try
        {
            succeeded = importService.deviceController("resource/dataFiles/TOC Tab Separated.txt");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            System.out.println(sample);
        }
    }


//    @Test
//    @Ignore
//    public void fixBryan()
//    {
//        try {
//            ICParser icParser =new ICParser("filePath",deviceRepository);
//            String content = new String(Files.readAllBytes(Paths.get("resource/IC Export.csv")));
//            BufferedWriter bw = new BufferedWriter(new FileWriter("resource/Bryanv2.csv"));
//
//            content = icParser.format(content);
//            bw.write(content);
//            bw.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

}
