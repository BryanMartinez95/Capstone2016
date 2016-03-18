package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.DeviceParser;
import environmentalDataLogging.parsers.ICPParser;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.parsers.TOCParser;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.services.interfaces.IImportService;
import environmentalDataLogging.tasks.InvalidImportException;
import org.omg.CORBA.DynAnyPackage.Invalid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ImportService implements IImportService
{
    DeviceParser deviceParser;
    List<Sample> samples;
    boolean sampleExists = false;

    @Autowired
    IDeviceRepository deviceRepository;
    @Autowired
    ISampleRepository sampleRepository;

    @Autowired
    IMeasurementRepository measurementRepository;

    @Autowired
    ITestMethodRepository testMethodRepository;

    @Autowired
    IUnitRepository unitRepository;

    @Autowired
    IUserRepository userRepository;

    public ImportService()
    {

    }

    /**This method will take in a file path and based on the filename, it will select a appropriate device to parse the file
     *
     * @param filepath
     * @throws IOException
     */
    public boolean deviceController(Path filepath ) throws IOException
    {
        samples = new ArrayList<>();
        String content = new String(Files.readAllBytes(filepath));

        if(filepath.getFileName().toString().equalsIgnoreCase("ICP.csv"))
        {
            deviceParser = new ICPParser(deviceRepository,testMethodRepository,userRepository);
        }
        else if(filepath.getFileName().toString().equalsIgnoreCase("IC.csv"))
        {
            deviceParser = new ICParser(deviceRepository,testMethodRepository,userRepository);
        }
        else if(filepath.getFileName().toString().equalsIgnoreCase("TN.txt"))
        {
            deviceParser =new TOCParser(deviceRepository,testMethodRepository,unitRepository,userRepository);
        }
        else if(filepath.getFileName().toString().equalsIgnoreCase("TOC.txt"))
        {
            deviceParser =new TOCParser(deviceRepository,testMethodRepository,unitRepository,userRepository);
        }
        else{
            //TODO throw error msg
            System.out.println("File not found");
            return false;
        }

        List<String[]> fileContent = deviceParser.format(content);
        for(int i =0;fileContent.size()> i;i++)
        {
            String labId=deviceParser.setLabId(fileContent.get(i));
            try{
                for(int j=0;samples.size()>j;j++)
                {
                    if(samples.get(j).getLabId().equalsIgnoreCase(labId))
                    {
                        samples.set(j, deviceParser.parse(fileContent.get(i), samples,labId));
                        sampleExists = true;
                        break;
                    }
                    else
                    {
                        sampleExists = false;
                    }
                }
                if(samples.size()==0 || sampleExists == false)
                {
                    samples.add(deviceParser.parse(fileContent.get(i), samples,labId));
                }
            }catch (InvalidImportException e) {
                e.printStackTrace();
            }

        }


        return save(samples);
    }

    public boolean save(List<Sample> samples)
    {

        for(Sample sample:samples)
        {
            if(sampleRepository.findByLabId(sample.getLabId()) == null)
            {
                sampleRepository.saveAndFlush(sample);
            }else{
                Set<Measurement> measurementSet = sample.getMeasurements();
                sample = sampleRepository.findByLabId(sample.getLabId());
                measurementSet.addAll(sample.getMeasurements());
                sample.setMeasurements(measurementSet);
                sampleRepository.save(sample);
            }

            for(Measurement measurement:sample.getMeasurements())
            {try {
                if (measurementRepository.findByDateAndValueAndTestMethod(measurement.getDate(), measurement.getValue(), testMethodRepository.findByName(measurement.getTestMethod().getName())) != null) {

                } else {
                    measurement.setSample(sampleRepository.findByLabId(sample.getLabId()));
                    measurementRepository.saveAndFlush(measurement);

                }
            }catch (NullPointerException ex)
            {
                //logger
            }
                measurementRepository.flush();

            }
            sampleRepository.flush();
        }

        return true;
    }


}
