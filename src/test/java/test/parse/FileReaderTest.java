package test.parse;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import environmentalDataLogging.EnvironmentalDataLoggingApplication;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.ImportService;
import environmentalDataLogging.services.interfaces.ISampleService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
//@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
//        TransactionalTestExecutionListener.class,
//        DbUnitTestExecutionListener.class})
public class FileReaderTest
{
    @Autowired
    ISampleRepository sampleRepository;
    @Autowired
    IDeviceRepository deviceRepository;

    ImportService importService;
    List<Sample> samples;

    @Before
    public void setup()

    {
        samples = new ArrayList<>();
        importService=new ImportService();
    }
    @Test
    @Ignore
    public void deviceSelector1ICTest()
    {
        try
        {
            samples = importService.deviceController("ic",deviceRepository);
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
        sampleRepository.saveAndFlush(sample);
        }
    }

    @Test
    @Ignore
    public void deviceICPTest()
    {
        try
        {
            samples = importService.deviceController("icp",deviceRepository);
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            //sampleRepository.saveAndFlush(sample);
            System.out.println(sample);
        }

    }
    @Test
    public void deviceTOCTest()
    {
        try
        {
            samples = importService.deviceController("toc",deviceRepository);
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        for(Sample sample: samples)
        {
            //sampleRepository.saveAndFlush(sample);
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
