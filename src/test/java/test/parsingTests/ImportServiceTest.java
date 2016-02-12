package test.parsingTests;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ISampleRepository;
import environmentalDataLogging.services.ImportService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringApplicationConfiguration(classes = EnvironmentalDataLoggingApplication.class)
//@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
//        TransactionalTestExecutionListener.class,
//        DbUnitTestExecutionListener.class})
public class ImportServiceTest
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
    //@Ignore
    public void deviceSelector1ICTest()
    {
        try
        {
            samples = importService.deviceController("resource/dataFiles/IC Export.csv",deviceRepository);
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
            samples = importService.deviceController("resource/dataFiles/ICP_CSV.csv",deviceRepository);
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
    @Ignore
    public void deviceTOCTest()
    {
        try
        {
            samples = importService.deviceController("resource/dataFiles/TOC Tab Separated.txt",deviceRepository);
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
    @Ignore
    public void deviceTNTest()
    {
        try
        {
            samples = importService.deviceController("resource/dataFiles/TOC Tab Separated.txt",deviceRepository);
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
