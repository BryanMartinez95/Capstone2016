package environmentalDataLogging.services;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.ICPParser;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.parsers.TOCParser;
import environmentalDataLogging.repositories.*;
import environmentalDataLogging.tasks.InvalidImportException;
import org.omg.CORBA.DynAnyPackage.Invalid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ImportService
{
    ICParser icParser;
    ICPParser icpParser;
    TOCParser tocParser;
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

    public ImportService()
    {

    }

    /**This method will take in a file path and based on the filename, it will select a appropriate device to parse the file
     *
     * @param filepath
     * @throws IOException
     */
    public boolean deviceController(String filepath ) throws IOException
    {
        samples = new ArrayList<>();
        String content = new String(Files.readAllBytes(Paths.get(filepath)));
        String fileType= null;
        //testline
        if(filepath.equalsIgnoreCase("resource/dataFiles/ICP_CSV.csv"))
        {
            fileType = "icp";
        }
        else if(filepath.equalsIgnoreCase("resource/dataFiles/IC Export.csv"))
        {
            fileType = "ic";
        }
        else if(filepath.equalsIgnoreCase("resource/dataFiles/TOC Tab Separated.txt"))
        {
            fileType = "toc";
        }
        else
        {


        }

        switch(fileType)
        {
            case "ic":
                icParser = new ICParser(deviceRepository,testMethodRepository);
                List<String[]> IClist = icParser.format(content);
                icParser.setHeader(IClist.get(0));
                IClist.remove(0);
                for(int i =0;IClist.size()> i;i++)
                {
                    try {

                        for(int j =0;samples.size()>j; j++)
                        {
                            if (samples.get(j).getLabId().equalsIgnoreCase(IClist.get(i)[1]))
                            {
                                samples.set(j, icParser.parse(IClist.get(i), samples));
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
                            samples.add(icParser.parse(IClist.get(i), samples));
                        }

                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }

                break;

            case "toc":
                tocParser =new TOCParser(deviceRepository,testMethodRepository,unitRepository);
                List<String[]> tocList = tocParser.format(content);
                for(int i=0;tocList.size()>i;i++)
                {
                    String labid= null;
                    if(tocList.get(i)[2].equalsIgnoreCase("") || tocList.get(i)[2].equalsIgnoreCase(null))
                    {
                        labid = tocList.get(i)[3];
                    }
                    else{
                        labid = tocList.get(i)[2];
                    }
                    try{

                        for(int j=0;samples.size()>j;j++)
                        {
                            if(samples.get(j).getLabId().equalsIgnoreCase(labid))
                            {
                                samples.set(j, tocParser.parse(tocList.get(i), samples,labid));
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
                            samples.add(tocParser.parse(tocList.get(i),samples,labid));
                        }

                    }catch (InvalidImportException e)
                    {
                        e.printStackTrace();
                    }
                }

                break;

            case "icp":
                icpParser = new ICPParser(deviceRepository,testMethodRepository);
                List<String[]> ICPlist = icpParser.format(content);
                for(int i =0;ICPlist.size()> i;i++)
                {
                    try {

                        for(int j =0;samples.size()>j; j++)
                        {
                            if (samples.get(j).getLabId().equalsIgnoreCase(ICPlist.get(i)[1]))
                            {
                                samples.set(j, icpParser.parse(ICPlist.get(i), samples));
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
                            samples.add(icpParser.parse(ICPlist.get(i), samples));
                        }

                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }
                break;
        }


        return save(samples);
    }



    //TODO
    public boolean save(List<Sample> samples)
    {
        int sampleCounter=0;
        int measurementCounter =0;
        int samplerepeatCounter =0;
        for(Sample sample:samples)
        {
            if(sampleRepository.findByLabId(sample.getLabId()) == null)
            {
                sampleRepository.saveAndFlush(sample);
                System.out.println("Sample Count:" + sampleCounter++);
            }else{
                Set<Measurement> measurementSet = sample.getMeasurements();
                sample = sampleRepository.findByLabId(sample.getLabId());
                measurementSet.addAll(sample.getMeasurements());
                sample.setMeasurements(measurementSet);
                sampleRepository.save(sample);
                System.out.println("SampleRepeat Count:" + samplerepeatCounter++);
            }

            for(Measurement measurement:sample.getMeasurements())
            {
                if(measurementRepository.findByDateAndValueAndTestMethod(measurement.getDate(),measurement.getValue(), testMethodRepository.findByName(measurement.getTestMethod().getName())) != null)
                {
                    System.out.println("duplicate:" + measurement.toString());
                }else{
                    System.out.println("Error/addition Line:"+measurement.toString());
                        measurement.setSample(sampleRepository.findByLabId(sample.getLabId()));
                        measurementRepository.saveAndFlush(measurement);

                    System.out.println("Measurement Count:" + measurementCounter++);
                    System.out.println(measurement.toString());
                }
                measurementRepository.flush();

            }
            sampleRepository.flush();
        }

        return true;
    }


}
