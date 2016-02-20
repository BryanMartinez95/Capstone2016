package environmentalDataLogging.services;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.ICPParser;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.parsers.TOCParser;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


public class ImportService
{
    ICParser icParser;
    ICPParser icpParser;
    TOCParser tocParser;
    List<Sample> samples;

    @Autowired
    IDeviceRepository deviceRepository;

    public ImportService()
    {
        samples = new ArrayList<>();
    }

    /**This method will take in a file path and based on the filename, it will select a appropriate device to parse the file
     *
     * @param filepath
     * @throws IOException
     */
    public boolean deviceController(String filepath ) throws IOException
    {

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
                icParser = new ICParser(deviceRepository);
                List<String[]> IClist = icParser.format(content);
                icParser.setHeader(IClist.get(0));
                IClist.remove(0);
                for(int i =0;IClist.size()> i;i++)
                {
                    try {
                        samples.add(icParser.parse(IClist.get(i)));

                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }

                break;

            case "toc":
                tocParser =new TOCParser(deviceRepository);
                List<String> tocFile = tocParser.format(content);
                tocParser.setHeader("temp");

               // tocParser.parse();
                break;

            case "icp":
                icpParser = new ICPParser(deviceRepository);
                List<String[]> ICPlist = icpParser.format(content);
                for(int i =0;ICPlist.size()> i;i++)
                {
                    try {
                        icpParser.parse(ICPlist.get(i));
                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }
                break;
        }

        for (Sample sample:samples)
        {
               System.out.println(sample.toString());
        }
        return save(samples);
    }

    //TODO
    public boolean save(List<Sample> samples)
    {
        return false;
    }


}
