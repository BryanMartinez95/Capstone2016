package environmentalDataLogging.services;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.parsers.ICPParser;
import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.parsers.TOCParser;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.tasks.InvalidImportException;

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

    public ImportService()
    {
        samples = new ArrayList<>();
    }

    /**This method will take in a file path and based on the filename, it will select a appropriate device to parse the file
     *
     * @param filepath
     * @throws IOException
     */
    public List<Sample> deviceController(String filepath,IDeviceRepository deviceRepository) throws IOException
    {

        String content = new String(Files.readAllBytes(Paths.get(filepath)));

        //testline
        String fileType = "ic";
        switch(fileType)
        {
            case "ic":
                icParser = new ICParser(deviceRepository);
                List<String[]> IClist = icParser.format(content);
                //content = icParser.format(content);
                //String lines[] = content.split("\\r\\n");
                icParser.setHeader(IClist.get(0));
                for(int i =1;IClist.size()> i;i++)
                {
                    try {
                        //String[] split = IClist.get(i).split(",", -1);
                        samples.add(icParser.parse(IClist.get(i)));

                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }

                break;

            case "toc":
               //tocParser =new TOCParser(deviceRepository);
                tocParser =new TOCParser();
                List<String> tocFile = tocParser.format(content);
                tocParser.format(content);
                tocParser.setHeader("temp");

               // tocParser.parse();
                break;

            case "icp":
                icpParser = new ICPParser();
                List<String> ICPlist = icpParser.format(content);
                for(String line: ICPlist)
                {
                    String[] lineArray = line.split(",",-1);
                    try {
                        icpParser.parse(lineArray);
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
        return samples;
    }


}
