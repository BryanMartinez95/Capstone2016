package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.DeviceParser;
import environmentalDataLogging.parsers.ICPParser;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.parsers.TOCParser;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.services.interfaces.IImportService;
import environmentalDataLogging.exceptions.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


/**
 * This service class is used to import a file to our database
 */
@Service
public class ImportService implements IImportService
{
    /**
     * The Device parser.
     */
    DeviceParser deviceParser;
    /**
     * The Samples.
     */
    List<Sample> samples;
    /**
     * The Sample exists.
     */
    boolean sampleExists = false;

    /**
     * The Device repository.
     */
    @Autowired
    IDeviceRepository deviceRepository;
    /**
     * The Sample repository.
     */
    @Autowired
    ISampleRepository sampleRepository;

    /**
     * The Measurement repository.
     */
    @Autowired
    IMeasurementRepository measurementRepository;

    /**
     * The Test method repository.
     */
    @Autowired
    ITestMethodRepository testMethodRepository;

    /**
     * The Unit repository.
     */
    @Autowired
    IUnitRepository unitRepository;

    /**
     * The User repository.
     */
    @Autowired
    IUserRepository userRepository;

    /**
     * Instantiates a new Import service.
     */
    public ImportService()
    {

    }

    /**
     * This method will take in a file path and based on the filename, it will select a appropriate device to parse the file
     *
     * @param filepath
     * @throws IOException
     */
    public boolean deviceController(Path filepath) throws IOException
    {
        samples = new ArrayList<>();
        String content = new String(Files.readAllBytes(filepath));

        if (filepath.getFileName().toString().equalsIgnoreCase("ICP.csv"))
        {
            deviceParser = new ICPParser(deviceRepository, testMethodRepository, userRepository);
        }
        else if (filepath.getFileName().toString().equalsIgnoreCase("IC.csv"))
        {
            deviceParser = new ICParser(deviceRepository, testMethodRepository, userRepository);
        }
        else if (filepath.getFileName().toString().equalsIgnoreCase("TN.txt"))
        {
            deviceParser = new TOCParser(deviceRepository, testMethodRepository, unitRepository, userRepository);
        }
        else if (filepath.getFileName().toString().equalsIgnoreCase("TOC.txt"))
        {
            deviceParser = new TOCParser(deviceRepository, testMethodRepository, unitRepository, userRepository);
        }
        else
        {
            //TODO throw error msg
            System.out.println("File not found");
            return false;
        }

        List<String[]> fileContent = deviceParser.format(content);
        for (int i = 0; fileContent.size() > i; i++)
        {
            String labId = deviceParser.setLabId(fileContent.get(i));
            try
            {
                for (int j = 0; samples.size() > j; j++)
                {
                    if (samples.get(j).getLabId().equalsIgnoreCase(labId))
                    {
                        samples.set(j, deviceParser.parse(fileContent.get(i), samples, labId));
                        sampleExists = true;
                        break;
                    }
                    else
                    {
                        sampleExists = false;
                    }
                }
                if (samples.size() == 0 || sampleExists == false)
                {
                    samples.add(deviceParser.parse(fileContent.get(i), samples, labId));
                }
            }
            catch (InvalidImportException e)
            {
                e.printStackTrace();
            }

        }


        return save(samples);
    }

    /**
     * THis method takes in a list of samples after the file has been parsed and edited and saved the list of new samples to the database
     *
     * @param samples
     * @return whether or not the save was successful
     */
    public boolean save(List<Sample> samples)
    {

        for (Sample sample : samples)
        {
            if (sampleRepository.findByLabId(sample.getLabId()) == null)
            {
                sampleRepository.saveAndFlush(sample);
            }
            else
            {
                Set<Measurement> measurementSet = sample.getMeasurements();
                sample = sampleRepository.findByLabId(sample.getLabId());
                measurementSet.addAll(sample.getMeasurements());
                sample.setMeasurements(measurementSet);
                sampleRepository.save(sample);
            }

            for (Measurement measurement : sample.getMeasurements())
            {
                try
                {
                    if (measurementRepository.findByDateAndValueAndTestMethod(measurement.getDate(), measurement.getValue(), testMethodRepository.findByName(measurement.getTestMethod().getName())) != null)
                    {

                    }
                    else
                    {
                        measurement.setSample(sampleRepository.findByLabId(sample.getLabId()));
                        measurementRepository.saveAndFlush(measurement);

                    }
                }
                catch (NullPointerException ex)
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
