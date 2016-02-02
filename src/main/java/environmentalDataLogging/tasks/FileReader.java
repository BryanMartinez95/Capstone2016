package environmentalDataLogging.tasks;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by 631152 on 1/28/2016.
 */
public class FileReader
{
    ICParser icParser;
    ICPParser icpParser;
    TOCParser tocParser;

    public void deviceController(String filepath) throws IOException
    {
        String content = new String(Files.readAllBytes(Paths.get("C:/Developer/Data Files/IC EXPORT.csv")));
        String device= "ic";
        switch(device)
        {
            case "ic":
                icParser = new ICParser();
                content = icParser.format(content);
                String lines[] = content.split("\\r?\\n");

                for(int i =0;lines.length> i;i++)
                {
                    System.out.println(lines[i]);
                }

                System.out.println(lines[0]);
                icParser.setHeader();
                icParser.parse();
                break;

            case "toc":
                tocParser =new TOCParser();
                tocParser.format();
                tocParser.setHeader();
                tocParser.parse();
                break;

            case "icp":
                icpParser = new ICPParser();
                icpParser.format();
                icpParser.setHeader();
                icpParser.parse();
                break;
        }


    }

}
