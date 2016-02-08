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
        String content = new String(Files.readAllBytes(Paths.get("resource/ICP_CSV.csv")));

        switch(filepath)
        {
            case "ic":
                icParser = new ICParser(deviceRepository);
                content = icParser.format(content);
                String lines[] = content.split("\\r\\n");
                icParser.setHeader(lines[0]);
                for(int i =1;lines.length> i;i++)
                {
                    try {
                        String[] split = lines[i].split(",", -1);
                        if(split[1].equalsIgnoreCase("MQ") || split[1].startsWith("Standard") || split[1]
                                .equalsIgnoreCase("Blank") )
                        {

                        }else{
                            samples.add(icParser.parse(split));
                        }


                    } catch (InvalidImportException e) {
                        e.printStackTrace();
                    }
                }

                break;

            case "toc":
               //tocParser =new TOCParser(deviceRepository);
                tocParser =new TOCParser();
                tocParser.format(content);
                tocParser.setHeader("temp");
               // tocParser.parse();
                break;

            case "icp":
                icpParser = new ICPParser();
                icpParser.format(content);
                icpParser.setHeader("temp");
                icpParser.parse();
                break;
        }

        for (Sample sample:samples)
        {
               System.out.println(sample.toString());
        }
        return samples;
    }


}
